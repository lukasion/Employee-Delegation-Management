import express, { Request, Response } from 'express';
import { prisma } from '../index.ts';

type UserParams = { id: string };

interface CreateUserBody {
    email: string;
    name?: string | null;
}

type UpdateUserBody = Partial<CreateUserBody>;

const router = express.Router();

const parseUserId = (params: UserParams): number | null => {
    const id = Number.parseInt(params.id, 10);
    return Number.isNaN(id) ? null : id;
};

const getErrorMessage = (error: unknown): string =>
    error instanceof Error ? error.message : 'Unknown error';

router.get('/', async (_req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                delegationsGiven: true,
                delegationsReceived: true
            }
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: getErrorMessage(error) });
    }
});

router.get('/:id', async (req: Request<UserParams>, res: Response) => {
    try {
        const userId = parseUserId(req.params);
        if (userId === null) {
            return res.status(400).json({ error: 'Invalid user id' });
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                delegationsGiven: true,
                delegationsReceived: true
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: getErrorMessage(error) });
    }
});

router.post(
    '/',
    async (
        req: Request<unknown, unknown, CreateUserBody>,
        res: Response
    ) => {
        try {
            const { email, name } = req.body;

            const user = await prisma.user.create({
                data: { email, name }
            });

            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: getErrorMessage(error) });
        }
    }
);

router.put(
    '/:id',
    async (
        req: Request<UserParams, unknown, UpdateUserBody>,
        res: Response
    ) => {
        try {
            const userId = parseUserId(req.params);
            if (userId === null) {
                return res.status(400).json({ error: 'Invalid user id' });
            }

            const { email, name } = req.body;

            const user = await prisma.user.update({
                where: { id: userId },
                data: { email, name }
            });

            res.json(user);
        } catch (error) {
            res.status(400).json({ error: getErrorMessage(error) });
        }
    }
);

router.delete('/:id', async (req: Request<UserParams>, res: Response) => {
    try {
        const userId = parseUserId(req.params);
        if (userId === null) {
            return res.status(400).json({ error: 'Invalid user id' });
        }

        await prisma.user.delete({
            where: { id: userId }
        });

        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: getErrorMessage(error) });
    }
});

export default router;
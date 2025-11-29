import express from 'express';
import { prisma } from '../index.ts';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                delegationsGiven: true,
                delegationsReceived: true
            }
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(req.params.id) },
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
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { email, name } = req.body;

        const user = await prisma.user.create({
            data: { email, name }
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { email, name } = req.body;

        const user = await prisma.user.update({
            where: { id: parseInt(req.params.id) },
            data: { email, name }
        });

        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await prisma.user.delete({
            where: { id: parseInt(req.params.id) }
        });

        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
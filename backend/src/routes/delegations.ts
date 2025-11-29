import express from 'express';
import { prisma } from '../index.ts';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const delegations = await prisma.delegation.findMany({
      include: {
        delegator: true,
        delegate: true
      }
    });
    res.json(delegations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const delegation = await prisma.delegation.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        delegator: true,
        delegate: true
      }
    });

    if (!delegation) {
      return res.status(404).json({ error: 'Delegation not found' });
    }

    res.json(delegation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);

    const delegations = await prisma.delegation.findMany({
      where: {
        OR: [
          { delegatorId: userId },
          { delegateId: userId }
        ]
      },
      include: {
        delegator: true,
        delegate: true
      }
    });

    res.json(delegations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { delegatorId, delegateId, startDate, endDate, status } = req.body;

    const delegation = await prisma.delegation.create({
      data: {
        delegatorId: parseInt(delegatorId),
        delegateId: parseInt(delegateId),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        status: status || 'active'
      },
      include: {
        delegator: true,
        delegate: true
      }
    });

    res.status(201).json(delegation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { startDate, endDate, status } = req.body;

    const delegation = await prisma.delegation.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ...(startDate && { startDate: new Date(startDate) }),
        ...(endDate && { endDate: new Date(endDate) }),
        ...(status && { status })
      },
      include: {
        delegator: true,
        delegate: true
      }
    });

    res.json(delegation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await prisma.delegation.delete({
      where: { id: parseInt(req.params.id) }
    });

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
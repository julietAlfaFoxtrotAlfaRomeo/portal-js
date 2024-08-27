import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const categories = await prisma.category.findMany();
                res.status(200).json(categories);
            } catch (error) {
                res.status(500).json({ error: 'Failed to fetch categories' });
            }
            break;
        case 'PUT':
            try {
                const { id, name, businessGroup } = req.body;
                const category = await prisma.category.update({
                    where: { id: Number(id) },
                    data: { name, businessGroup },
                });
                res.status(200).json(category);
            } catch (error) {
                res.status(500).json({ error: 'Failed to update category' });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}

import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      try {
        const category = await prisma.category.findUnique({
          where: { id: Number(id) },
        });
        if (!category) {
          return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json(category);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch category' });
      }
      break;
    case 'PUT':
      try {
        const { name, businessGroup } = req.body;
        const updatedCategory = await prisma.category.update({
          where: { id: Number(id) },
          data: { name, businessGroup },
        });
        res.status(200).json(updatedCategory);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update category' });
      }
      break;
    case 'DELETE':
      try {
        await prisma.category.delete({
          where: { id: Number(id) },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete category' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

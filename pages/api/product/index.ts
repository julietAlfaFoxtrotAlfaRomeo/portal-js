import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            return await handleGet(req, res);
        case 'POST':
            return await handlePost(req, res);
        case 'PUT':
            return await handlePut(req, res);
        case 'DELETE':
            return await handleDelete(req, res);
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
    try {
        const products = await prisma.product.findMany({
            include: { category: true, reviews: true },
        });
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching products' });
    }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
    try {
        const product = await prisma.product.create({
            data: req.body,
        });
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json({ error: 'Error creating product' });
    }
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
    const { id, stock, ...data } = req.body; // Tidak ada perubahan untuk status karena Anda tidak ingin mengupdate status
    try {
        const product = await prisma.product.update({
            where: { id: Number(id) },
            data: { ...data, stock },  // Update stock dan field lainnya, tapi tidak termasuk status
        });
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ error: 'Error updating product' });
    }
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
        await prisma.product.delete({
            where: { id: Number(id) },
        });
        return res.status(204).end();
    } catch (error) {
        return res.status(500).json({ error: 'Error deleting product' });
    }
}

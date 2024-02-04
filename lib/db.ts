import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient;
}

export const db = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.prisma = db;
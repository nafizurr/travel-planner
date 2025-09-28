//create type safe database client
//to be used in the application, especially const prisma in api routes
//because we created the prisma client now we have to change @prisma/client -> @/app/generated/prisma/client 

import { PrismaClient } from "@/app/generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient(); 

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

//auth variable providers information about the user that currently signed in

export const {auth, handlers, signIn, signOut} = NextAuth({
    providers: [GitHub],
    //user information storing using prisma
    adapter: PrismaAdapter(prisma),
});
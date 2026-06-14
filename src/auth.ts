import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } =
  NextAuth({
    adapter: PrismaAdapter(prisma),

    session: {
      strategy: "jwt",
    },

    providers: [
      Credentials({
        credentials: {
          email: {},
          password: {},
        },

        async authorize(credentials) {
          const email = credentials.email as string;
          const password = credentials.password as string;

          const user = await prisma.user.findUnique({
            where: { email },
          });

          if (!user) return null;

          const isValid = await bcrypt.compare(
            password,
            user.password ?? ""
          );

          if (!isValid) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.name,
          };
        },
      }),
    ],
  });
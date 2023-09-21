import bcryptjs from "bcryptjs";
import User from "@/Models/User";
import db from "@/utils/db";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

interface UserForm {
  _id: string;
  name: string;
  email: string;
  image: string;
  isAdmin: boolean;
}

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({
      token,
      user,
    }: {
      token: JWT;
      user: UserForm;
    }): Promise<JWT> => {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },
    session: async ({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> => {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      authorize: async (credentials) => {
        await db.connect();

        const user = await User.findOne({ email: credentials?.email });
        await db.disconect();

        if (
          user &&
          bcryptjs.compareSync(credentials?.password, user.password)
        ) {
          return {
            _id: user._id,
            name: user.name,
            email: user.email,
            image: user.image,
            isAdmin: user.isAdmin,
          };
        }
        throw new Error("Invalid email or password");
      },
    }),
  ],
});

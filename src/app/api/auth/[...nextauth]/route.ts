// require("dotenv").config();

import NextAuth, { DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";
import { AuthOptions } from "next-auth";

const config = require("../../../../../config.json");
// const bcrypt = require("bcrypt");

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const configEmail = config.email;
        const configPassword = config.password;
        const isValidPassword = bcrypt.compare(password, configPassword);
        console.log(isValidPassword);
        if (email !== configEmail || !isValidPassword) {
          throw new Error("Invalid Credentials");
          return null;
        }
        return {
          id: "1",
          name: "Adonis Daniel",
          email: "adonisdaniel931@gmail.com",
        };
      },
    }),
  ],
  pages: {
    signIn: "/admin",
  },
  secret: config.nextAuthSecret,
  session: { strategy: "jwt" },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

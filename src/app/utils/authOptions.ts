import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
const config = require("../../../config.json");

export const authOptions: NextAuthOptions = {
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
        const isValidPassword = await bcrypt.compare(password, configPassword);
        console.log(isValidPassword);
        if (email !== configEmail || !isValidPassword) {
          throw new Error("Invalid Credentials");
        }
        return {
          id: "1",
          name: "Adonis Daniel",
          email: email,
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

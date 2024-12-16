import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod"; // For input validation

// Define types
interface Credentials {
  email: string;
  password: string;
}

// Input validation schema
const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Credentials | undefined) {
        try {
          if (!credentials) {
            throw new Error("No credentials provided");
          }

          // Validate input
          const parsedCredentials = credentialsSchema.safeParse(credentials);
          if (!parsedCredentials.success) {
            throw new Error("Invalid credentials format");
          }

          // In practice, this should query a database instead of using env vars
          const validEmail = process.env.ADMIN_EMAIL;
          const hashedPassword = process.env.ADMIN_PASSWORD;

          if (!validEmail || !hashedPassword) {
            throw new Error("Server configuration error");
          }

          if (credentials.email !== validEmail) {
            return null;
          }

          const isValidPassword = await bcrypt.compare(
            credentials.password,
            hashedPassword
          );

          if (!isValidPassword) {
            return null;
          }

          return {
            id: "1",
            email: validEmail,
            name: "Admin",
            role: "admin",
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async session({ session, token }) {
      // Add additional user info to session if needed
      return {
        ...session,
        user: {
          ...session.user,
          role: "admin",
        },
      };
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

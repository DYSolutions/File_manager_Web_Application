import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Define authOptions internally (do not export it)
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

// Create the NextAuth handler
const handler = NextAuth(authOptions);

// Export only the GET and POST handlers
export { handler as GET, handler as POST };
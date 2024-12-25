import CredentialsProvider from 'next-auth/providers/credentials';

export const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'Enter your username',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
        },
      },
      async authorize(credentials) {
        const user = { id: 1, name: 'foodie', password: 'Foodie4Life!' };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: { signIn: '/login' },
  session: {
    strategy: 'jwt',
  },
  // Add these configurations
  useSecureCookies: process.env.NODE_ENV === 'production',
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
};

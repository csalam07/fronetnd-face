import NextAuth from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import db from '../../../config/db';
import User from '../../../models/userModel';

db.getConnection((err) => {
  if (err) {
    console.log('Error connecting to database');
  } else {
    console.log('Database connection is successful.');
  }
});

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'email@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        console.log(email, password);

        const [user, _] = await User.getUserByEmail(email);
        console.log(user);

        if (!user) throw new Error('Invalid email or password');
        const isMatch =
          JSON.stringify(password) == JSON.stringify(user.password);
        console.log(isMatch);
        if (!isMatch) throw new Error('Password Incorrect.');

        if (user) return user;

        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: 'test',
  jwt: {
    secret: 'test',
    encryption: true,
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
});

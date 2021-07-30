import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
console.log(process.env.GITHUB_ID)
export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session: async (session, user) => {
      session.userId = user.sub
      return Promise.resolve(session)
    },
  },
})

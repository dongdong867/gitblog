import NextAuth from "next-auth"
import { cookies } from "next/headers"
import GitHub from "next-auth/providers/github"

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [GitHub({
    clientId: process.env.AUTH_GITHUB_ID,
    clientSecret: process.env.AUTH_GITHUB_SECRET,
    authorization: {
      url: "https://github.com/login/oauth/authorize",
      params: { scope: "read:user user:email repo" }
    }
  })],
  callbacks: {
    async signIn(params) {
      const cookieStore = cookies()
      if (params.account?.access_token) {
        cookieStore.set("api_token", params.account?.access_token!)
        return true
      }
      return false
    }
  }
})
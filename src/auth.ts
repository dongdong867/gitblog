import NextAuth, { Session } from "next-auth"
import GitHub from "next-auth/providers/github"

export interface SessionWithToken extends Session {
  accessToken: string
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [GitHub({
    authorization: {
      url: "https://github.com/login/oauth/authorize",
      params: { scope: "read:user user:email repo" }
    }
  })],
  callbacks: {
    jwt: async (params) => {
      if (params.account && params.account.access_token) {
        params.token.accessToken = params.account.access_token
      }
      return params.token
    },
    session: async (params) => {
      return { ...params.session, accessToken: params.token.accessToken }
    }
  }
})
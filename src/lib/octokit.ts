import { SessionWithToken, auth } from "@/auth";
import { Octokit } from "octokit";

export const getOctokit = async () => {
  const session = (await auth()) as SessionWithToken

  if (session) {
    return new Octokit({
      auth: session.accessToken
    })
  } else {
    return new Octokit()
  }
}
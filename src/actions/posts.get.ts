import { SessionWithToken, auth } from "@/auth"
import { Octokit } from "octokit"

export const getPosts = async (page: number): Promise<Issue[]> => {
  const session = (await auth()) as SessionWithToken
  
  let octokit: Octokit
  if (session) {
    octokit = new Octokit({
      auth: session.accessToken
    })
  } else {
    octokit = new Octokit()
  }

  const res = await octokit.rest.issues.listForRepo({
    owner: process.env.GITHUB_USER_NAME as string,
    repo: process.env.GITHUB_REPO_NAME as string,
    state: "open",
    per_page: 10,
    page: page
  })

  return res.data as Issue[]
}
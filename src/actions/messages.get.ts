import { getOctokit } from "@/lib/octokit"

export const getMessages = async (postNumber: number): Promise<Message[]> => {
  const octokit = await getOctokit()

  const res = await octokit.rest.issues.listComments({
    owner: process.env.GITHUB_USER_NAME as string,
    repo: process.env.GITHUB_REPO_NAME as string,
    issue_number: postNumber
  })

  return res.data as Message[]
}
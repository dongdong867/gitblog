"use server"

import { getOctokit } from "@/lib/octokit"

export const getPosts = async (page: number): Promise<Issue[]> => {
  const octokit = await getOctokit()

  const res = await octokit.rest.issues.listForRepo({
    owner: process.env.GITHUB_USER_NAME as string,
    repo: process.env.GITHUB_REPO_NAME as string,
    state: "open",
    per_page: 10,
    page: page
  })

  return res.data as Issue[]
}
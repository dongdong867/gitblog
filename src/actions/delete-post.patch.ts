"use server"

import { getOctokit } from "@/lib/octokit"
import { redirect } from "next/navigation"

export const deletePost = async (postNumber: number) => {
  const octokit = await getOctokit()

  await octokit.rest.issues.update({
    owner: process.env.GITHUB_USER_NAME as string,
    repo: process.env.GITHUB_REPO_NAME as string,
    issue_number: postNumber,
    state: "closed",
  })

  redirect("/")
}
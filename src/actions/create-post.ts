"use server"

import { SessionWithToken, auth } from "@/auth"
import { redirect } from "next/navigation"
import { Octokit } from "octokit"

type CreatePostType = {
  owner: string
  repo: string
  title: string
  body: string
  labels: string[] | undefined
}

export const createPost = async (formData: FormData) => {
  const session = (await auth()) as SessionWithToken

  const label = formData.get("label") as string
  const post: CreatePostType = {
    owner: process.env.GITHUB_USER_NAME as string,
    repo: process.env.GITHUB_REPO_NAME as string,
    title: formData.get("title") as string,
    body: formData.get("body") as string,
    labels: label.length > 0 ? [label] : undefined
  }

  const octokit = new Octokit({
    auth: session.accessToken
  })

  await octokit.rest.issues.create(post)
  redirect("/")
}
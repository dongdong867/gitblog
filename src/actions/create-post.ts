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

export const createPost = async (
  prevState: { error: string },
  formData: FormData
) => {
  
  // validate title
  const title = formData.get("title") as string
  if (title == "") {
    return { error: "Title can not be empty."}
  }
  
  // validate body
  const body = formData.get("body") as string
  if (body.length < 30) {
    return { error: "Body should be more then 30 words." }
  }

  const label = formData.get("label") as string
  const post: CreatePostType = {
    owner: process.env.GITHUB_USER_NAME as string,
    repo: process.env.GITHUB_REPO_NAME as string,
    title: title,
    body: body,
    labels: label.length > 0 ? [label] : undefined
  }
  
  const session = (await auth()) as SessionWithToken
  const octokit = new Octokit({
    auth: session.accessToken
  })

  await octokit.rest.issues.create(post).catch(err => {
    return { error: err }
  })

  // redirect to home when create finished
  redirect("/")
}
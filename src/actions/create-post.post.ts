"use server";

import { getOctokit } from "@/lib/octokit";
import { validatePost } from "@/lib/post-validation";
import { redirect } from "next/navigation";

type CreatePostTypes = {
  owner: string;
  repo: string;
  title: string;
  body: string;
  labels: string[] | undefined;
};

export const createPost = async (
  prevState: {
    postNumber?: number;
    name: string;
    error: string;
  },
  formData: FormData
) => {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  
  // validate title
  const { result, data } = validatePost(prevState.postNumber, title, body);
  if (!result) {
    return data;
  }

  const label = formData.get("label") as string;
  const post: CreatePostTypes = {
    owner: process.env.GITHUB_USER_NAME as string,
    repo: process.env.GITHUB_REPO_NAME as string,
    title: title,
    body: body,
    labels: label.length > 0 ? [label] : undefined,
  };

  const octokit = await getOctokit();
  await octokit.rest.issues.create(post).catch((err) => {
    return { name: "other", error: err };
  });

  // redirect to home when create finished
  redirect("/");
};

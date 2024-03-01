"use server";

import { getOctokit } from "@/lib/octokit";
import { validatePost } from "@/lib/post-validation";
import { redirect } from "next/navigation";

type UpdatePostTypes = {
  owner: string;
  repo: string;
  issue_number: number;
  title: string;
  body: string;
  labels: string[] | undefined;
};

export const updatePost = async (
  prevState: { postNumber?: number; name: string; error: string },
  formData: FormData
) => {
  // validate postNumber
  if (!prevState.postNumber) {
    return {
      postNumber: -1,
      name: "other",
      error: "Error on getting post number.",
    };
  }

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  
  // validate fields
  const { result, data } = validatePost(prevState.postNumber, title, body);
  if (!result) {
    return data;
  }

  const label = formData.get("label") as string;
  const post: UpdatePostTypes = {
    owner: process.env.GITHUB_USER_NAME as string,
    repo: process.env.GITHUB_REPO_NAME as string,
    issue_number: prevState.postNumber,
    title: title,
    body: body,
    labels: label.length > 0 ? [label] : undefined,
  };

  const octokit = await getOctokit();
  await octokit.rest.issues.update(post).catch((err) => {
    return { postNumber: prevState.postNumber, name: "other", error: err };
  });

  redirect("/");
};

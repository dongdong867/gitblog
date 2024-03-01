import { getOctokit } from "@/lib/octokit";

export const getUser = async () => {
  const octokit = await getOctokit();
  const res = await octokit.rest.users.getAuthenticated();
  return res.data as User;
};

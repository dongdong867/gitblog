import { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "Gitblog",
    description: "A markdown supported GitHub blog.",
    start_url: "/",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/icon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
};

export default manifest;

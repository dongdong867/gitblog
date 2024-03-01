export const validatePost = (
  postNumber: number | undefined,
  title: string,
  body: string
): {
  result: boolean;
  data: {
    postNumber: number | undefined;
    name: string;
    error: string;
  };
} => {
  if ((title == "")) {
    return {
      result: false,
      data: {
        postNumber: postNumber,
        name: "title",
        error: "Title can not be empty.",
      },
    };
  }

  if (body.length < 30) {
    return {
      result: false,
      data: {
        postNumber: postNumber,
        name: "body",
        error: "Body should be more then 30 words.",
      },
    };
  }

  return {
    result: true,
    data: {
      postNumber: postNumber,
      name: "",
      error: "",
    },
  };
};

export const getBodyEditedValue = () => {
  const textarea = document.getElementById(
    "post-body"
  ) as HTMLTextAreaElement | null;
  if (textarea) {
    return textarea.value;
  }
  return "";
};

export const adjustedHeight = () => {
  const textarea = document.getElementById(
    "post-body"
  ) as HTMLTextAreaElement | null;
  if (textarea) {
    textarea.rows = Math.max(textarea.value.split("\n").length, 5);
    while (textarea.scrollHeight > textarea.clientHeight) {
      textarea.rows += 1;
    }
  }
};

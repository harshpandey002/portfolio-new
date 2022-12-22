export const open = (url) => {
  window.open(url, "_blank");
};

export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};

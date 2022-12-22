import MarkdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import markdownCopy from "markdown-it-code-copy";
import markdownAnchor from "markdown-it-anchor";
import slugify from "slugify";

export const md = new MarkdownIt({
  breaks: true,
  // linkify: true,
})
  .use(highlightjs)
  .use(markdownCopy, {
    iconClass: "",
    buttonClass: "copyBtn",
  })
  .use(markdownAnchor, { slugify });

export const sanitize = (html) => {
  const result = html.replace(/<a href+/g, "<a target='_blank' href");
  return result;
};

export const readTime = (content) => {
  const wpm = 225;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
};

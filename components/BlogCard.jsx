/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function BlogCard({ blog, isHome }) {
  const { title, squareImage, description, slug, isLive } = blog;

  return (
    <Link href={`/blogs/${slug}`} scroll={false}>
      <div className={`rounded-card p-8 flex gap-8 border border-card-border bg-card cursor-pointer hover:bg-card-hover mobile:flex-col ${!isLive ? "disabled" : ""}`}>
        <span className="w-16 h-16 min-w-[64px] min-h-[64px] rounded-img flex overflow-hidden">
          <img className="w-full h-full" src={squareImage} alt={title} />
        </span>
        <span>
          <h5 className="text-lg font-normal leading-[var(--line-height)] text-text-heading">
            {title}{" "}
            {!isLive && <span className="text-freelance italic">(Coming Soon)</span>}
          </h5>
          <p className="text-base text-text-body leading-[var(--line-height)] mobile:mt-1">{description}</p>
        </span>
      </div>
    </Link>
  );
}

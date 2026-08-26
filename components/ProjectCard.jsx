/* eslint-disable @next/next/no-img-element */

export default function ProjectCard({ data }) {
  const { title, image, description, link } = data;
  const className =
    "rounded-card p-8 flex gap-8 border border-card-border bg-card hover:bg-card-hover mobile:flex-col";
  const content = (
    <>
      <span className="w-16 h-16 min-w-[64px] min-h-[64px] rounded-img flex overflow-hidden bg-[#111] p-1">
        <img className="w-full h-full object-contain" src={image} alt={title} />
      </span>
      <span>
        <h5 className="text-lg font-normal leading-[var(--line-height)] text-text-heading">
          {title} {!link && <span className="text-freelance italic">(Private)</span>}
        </h5>
        <p className="text-base text-text-body leading-[var(--line-height)] mobile:mt-1">{description}</p>
      </span>
    </>
  );

  if (!link) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`${className} cursor-pointer`}
    >
      {content}
    </a>
  );
}

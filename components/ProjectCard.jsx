/* eslint-disable @next/next/no-img-element */

export default function ProjectCard({ data }) {
  const { title, image, description, link } = data;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`rounded-card p-8 flex gap-8 border border-card-border bg-card cursor-pointer hover:bg-card-hover mobile:flex-col ${!link ? "disabled" : ""}`}
    >
      <span className="w-16 h-16 min-w-[64px] min-h-[64px] rounded-img flex overflow-hidden">
        <img className="w-full h-full" src={image} alt={title} />
      </span>
      <span>
        <h5 className="text-lg font-normal leading-[var(--line-height)] text-text-heading">
          {title} {!link && <span className="text-freelance italic">(Coming Soon)</span>}
        </h5>
        <p className="text-base text-text-body leading-[var(--line-height)] mobile:mt-1">{description}</p>
      </span>
    </a>
  );
}

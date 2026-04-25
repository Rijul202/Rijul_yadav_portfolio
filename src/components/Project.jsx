import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-8 space-y-5 sm:py-10 sm:space-y-0 sm:flex"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="flex items-start gap-4">
          {image && (
            <img
              src={image}
              alt={title}
              className="object-cover w-20 h-14 rounded-lg border border-white/10 sm:w-24 sm:h-16"
            />
          )}
          <div className="min-w-0">
            <p className="text-lg sm:text-2xl">{title}</p>
            <div className="flex flex-wrap gap-2 mt-2 text-xs sm:text-sm text-sand sm:gap-4">
              {tags.map((tag) => (
                <span key={tag.id}>{tag.name}</span>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 text-sm cursor-pointer hover-animation sm:text-base"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" alt="Arrow right icon" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;

import { markdownify, slugify } from "@/lib/utils/textConverter";
import type { CollectionEntry } from "astro:content";
import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
type Job = CollectionEntry<"career">;

const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="lg:col-6">
      <div className="outer-div rounded-lg border-2 border-border px-4 py-5 md:px-8 md:py-10">
        {job.data?.title && (
          <a
            href={`/career/${slugify(job.slug)}`}
            className="h3 mb-3 font-extrabold text-dark"
            dangerouslySetInnerHTML={{
              __html: markdownify(job.data?.title),
            }}
          />
        )}

        {job.data?.location && (
          <p className="mb-4 text-light">{job.data?.location}</p>
        )}

        <div className="flex items-center">
          {job.data?.duration && (
            <>
              <BiTimeFive className="mr-2 text-[18px] font-medium text-dark" />
              <p className="mr-2 text-[18px] text-dark">{job.data?.duration}</p>
            </>
          )}

          {job.data?.salary && (
            <>
              <RxDividerVertical className="mr-2 text-[18px] font-medium text-dark" />
              <p className="text-[18px] text-dark">{job.data?.salary}</p>
            </>
          )}
        </div>

        <hr className="my-4" />

        <div className="mb-6">
          <p className="mb-3 text-[18px] text-dark ">Minimum qualifications</p>
          {job.data?.qualification?.map((q, index: number) => (
            <ul key={index}>
              <li className="mb-3 ml-2 text-light">- {q}</li>
            </ul>
          ))}
        </div>

        <a href={`/career/${slugify(job.slug)}`} className="btn btn-secondary">
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default JobCard;

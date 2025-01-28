import DynamicIcon from "@/helpers/DynamicIcon";
import { markdownify } from "@/lib/utils/textConverter";
import type { CollectionEntry } from "astro:content";
import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";

export default function StepsTab({
  tabs,
}: {
  tabs: CollectionEntry<"homepage">["data"]["step"]["steps"];
}) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className="mx-auto mb-9 w-full rounded-lg border border-border bg-section p-2 lg:w-fit">
        <div className="flex flex-col gap-2 lg:flex-row lg:justify-center">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`rounded-[8px] border border-transparent px-9 py-3 transition-colors hover:border-primary ${
                activeTab === index ? "bg-primary" : ""
              }`}
            >
              <div className="flex items-center justify-center">
                <DynamicIcon icon={tab.logo} className="mr-4 text-2xl" />
                <h5
                  dangerouslySetInnerHTML={{
                    __html: markdownify(tab.label),
                  }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* tabs */}
      <div className="lg:flex">
        <div className="mb-9 flex items-center justify-center lg:w-[50%]">
          <img
            src={tabs[activeTab].image}
            className="mx-auto"
            width="427"
            height="400"
            alt="header image"
          />
        </div>
        <div className="mt-5 lg:my-auto lg:w-[50%]">
          <div className="mb-4 lg:mb-8">
            <h3
              className="font-bol mb-2 text-dark lg:mb-4"
              dangerouslySetInnerHTML={{
                __html: markdownify(tabs[activeTab].title),
              }}
            />
            <p
              className="font-medium"
              dangerouslySetInnerHTML={{
                __html: markdownify(tabs[activeTab].details),
              }}
            />
          </div>
          <div>
            {tabs[activeTab].points.map((point, index: number) => (
              <div key={index}>
                <div className="mb-2 flex items-center lg:mb-4">
                  <BsCheck className="mr-3 rounded-full bg-primary text-xl" />
                  <p
                    className="font-semibold"
                    dangerouslySetInnerHTML={{
                      __html: markdownify(point),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

import DynamicIcon from "@/helpers/DynamicIcon";
import { markdownify } from "@/lib/utils/textConverter";
import type { CollectionEntry } from "astro:content";
import React, { useState } from "react";

export default function FeaturesTab({
  features,
}: {
  features: CollectionEntry<"homepage">["data"]["feature"]["features"];
}) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="row">
      <div className="col-12 lg:col">
        {features.map((feature, index) => (
          <section
            key={index}
            onClick={() => setActiveTab(index)}
            className={`mb-6 flex cursor-pointer rounded-lg border py-8 pl-8 pr-14 ${
              activeTab === index
                ? "activeTab border-primary bg-primary"
                : " hover:border-primary"
            }`}
          >
            <div className="mr-16 h-3 w-3">
              <DynamicIcon
                icon={feature.logo}
                className="rounded pl-3 text-4xl"
              />
            </div>
            <div>
              <h4 className="mb-4 font-bold text-dark">{feature.label}</h4>
              <p
                className="font-mediums"
                dangerouslySetInnerHTML={{
                  __html: markdownify(feature.details),
                }}
              />
            </div>
          </section>
        ))}
      </div>

      <div className="col-12 lg:col">
        <img
          src={features[activeTab].image}
          className="mx-auto"
          width="563"
          height="516"
          alt="feature image"
        />
      </div>
    </div>
  );
}

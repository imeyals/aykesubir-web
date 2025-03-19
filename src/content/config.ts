import { defineCollection, z } from "astro:content";

const homepageCollection = defineCollection({
  schema: z.object({
    banner: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string().optional(),
      buttons: z.array(
        z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      ),
    }),
    logo: z.object({
      enable: z.boolean(),
      logos: z.array(
        z.object({
          name: z.string(),
          logo: z.string(),
        }),
      ),
    }),
    feature: z.object({
      enable: z.boolean(),
      title: z.string(),
      content: z.string(),
      features: z.array(
        z.object({
          label: z.string(),
          details: z.string(),
          logo: z.string(),
          image: z.string(),
        }),
      ),
    }),
    step: z.object({
      enable: z.boolean(),
      title: z.string(),
      content: z.string(),
      steps: z.array(
        z.object({
          label: z.string(),
          logo: z.string(),
          title: z.string(),
          details: z.string(),
          image: z.string(),
          points: z.array(z.string()),
        }),
      ),
    }),
    review: z.object({
      enable: z.boolean(),
      title: z.string(),
      content: z.string(),
      reviews: z.array(
        z.object({
          user: z.string(),
          image: z.string(),
          designation: z.string(),
          review: z.string(),
        }),
      ),
    }),
  }),
});

// Use Case collection schema
const usecaseCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    header: z.string().optional(),
    content: z.string().optional(),
    image: z.string().optional(),
    steps: z
      .array(
        z.object({
          title: z.string().optional(),
          description: z.string().optional(),
          points: z.array(z.string()).optional(),
          image: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

// Post collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).default(["all"]),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

// Indsutry collection schema
const industryCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).default(["all"]),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

// Capability collection schema
const capabilityCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).default(["all"]),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

// Career collections schema
const careerCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    content: z.string().optional(),
    choose: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        points: z
          .array(
            z.object({
              icon: z.string().optional(),
              title: z.string().optional(),
              subtitle: z.string().optional(),
            }),
          )
          .optional(),
      })
      .optional(),
    images: z.any(),
    job: z.object({ title: z.string(), description: z.string() }).optional(),
    department: z.array(z.string()).default(["all"]),
    details: z.string().optional(),
    summery: z.string().optional(),
    location: z.string().optional(),
    city: z.string().optional(),
    duration: z.string().optional(),
    salary: z.string().optional(),
    image: z.string().optional(),
    qualification: z.array(z.string()).optional(),
  }),
});
4;

// team
const teamSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
    members: z.array(
      z.object({
        name: z.string(),
        designation: z.string(),
        image: z.string(),
        social: z.array(
          z.object({
            name: z.string(),
            icon: z.string(),
            link: z.string(),
          }),
        ),
      }),
    ),
  }),
});

// pricing
const pricingSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
    content: z.string(),
    image: z.string(),

    plans: z.array(
      z.object({
        label: z.string(),
        packs: z.array(
          z.object({
            name: z.string(),
            icon: z.string(),
            price: z.number(),
            popular: z.boolean(),
            features: z.array(z.string()),
          }),
        ),
      }),
    ),

    compare: z.object({
      title: z.string(),
      content: z.string(),
      plans: z.array(z.object({ name: z.string() })),
      features: z.array(
        z.object({
          name: z.array(
            z.object({
              available: z.union([z.string(), z.boolean()]),
            }),
          ),
        }),
      ),
      buttons: z.array(z.object({ name: z.string() })),
    }),
  }),
});

// about collection
const aboutSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
    description2: z.string(),
    image: z.string(),
    rating: z.number(),
    reviews: z.string(),
    button: z.string(),

    achievement: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
    }),

    value: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
      values: z.array(
        z.object({
          logo: z.string(),
          name: z.string(),
          description: z.string(),
        }),
      ),
    }),

    team: z.object({
      title: z.string(),
      description: z.string(),
    }),

    job: z.object({
      title: z.string(),
      description: z.string(),
    }),

    gallery: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
      image: z.any(),
    }),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  homepage: homepageCollection,
  usecase: usecaseCollection,
  blog: blogCollection,
  indsutry: industryCollection,
  capability: capabilityCollection,
  team: teamSchema,
  career: careerCollection,
  pricing: pricingSchema,
  about: aboutSchema,
  pages: pagesCollection,
};

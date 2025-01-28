// banner
export type ClientLogo = {
  enable: boolean;
  logos: {
    name: string;
    logo: string;
  }[];
};

export type HomePage = {
  banner: {
    title: string;
    content: string;
    image?: string;
    buttons: Button[];
  };
  logo: ClientLogo;
  feature: Features;
  step: Steps;
  review: Reviews;
};

// features
export type Feature = {
  label: string;
  details: string;
  image: string;
  logo: string;
};

export type Features = {
  enable: boolean;
  title: string;
  content: string;
  features: Feature[];
};

// steps
export type Step = {
  label: string;
  logo: string;
  title: string;
  details: string;
  image: string;
  points: string[];
};
export type Steps = {
  enable: boolean;
  title: string;
  content: string;
  steps: Step[];
};

// usecases
export type CaseStep = {
  title: string;
  description: string;
  image: string;
  points: string[];
};
export type Case = {
  data: {
    img: any;
    meta_title?: string;
    description?: string;
    title: string;
    content: string;
    header: string;
    logo: string;
    steps: CaseStep[];
  };
  slug?: string;
  content?: string;
};

export type UseCases = {
  data: {
    title: string;
    meta_title: string;
    description: string;
    content: string;
    cards: [{ label: string; details: string; logo: string }];
  };
};

// review
export type Review = {
  user: string;
  image: string;
  designation: string;
  review: string;
};
export type Reviews = {
  enable: boolean;
  title: string;
  content: string;
  reviews: Review[];
};

// pricing
export type Pack = {
  name: string;
  icon: string;
  price: number;
  popular: boolean;
  features: string[];
};
export type Plan = {
  label: string;
  packs: Pack[];
};
export type SinglePlan = {
  feature: string;
  basic: boolean;
  standard: boolean;
  gold: boolean;
};

export type ComparePlan = {
  name: string;
};
export type CompareFeature = {
  name: {
    name: string;
    available: boolean | string;
  }[];
};
export type Comparison = {
  title: string;
  content: string;
  plans: ComparePlan[];
  features: CompareFeature[];
  buttons: { name: string }[];
};

// about
export type Achievement = {
  title: string;
  description: string;
};

export type Value = { logo: string; name: string; description: string };

export type Values = {
  title: string;
  description: string;
  values: Value[];
};

export type Member = {
  name: string;
  designation: string;
  image: string;
  social: {
    name: string;
    icon: string;
    link: string;
  }[];
};
export type Team = {
  title: string;
  description: string;
  members: Member[];
};

// faq
export type Accordion = {
  title: string;
  content: string;
};

// career
export type Job = {
  title: string;
  meta_title: string;
  description: string;
  position: string[];
  details: string;
  summery: string;
  location: string;
  city: string;
  duration: string;
  salary: string;
  image: string;
  qualification: string[];
};

export type Choose = {
  icon: string;
  title: string;
  subtitle: string;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

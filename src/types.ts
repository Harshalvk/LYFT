export type PartnersLogoType = {
  id: number;
  name: string;
  logo: string;
}[];

export type MilestoneProps = {
  title: string;
  description: string;
  lastItem: boolean;
};

export type RoadmapType = {
  id: number;
  name: string;
  description: string;
};

export type FeaturesType = {
  title: string;
  decription: string
}[]
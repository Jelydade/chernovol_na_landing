import siteJson from "../../content/site.json";
import servicesJson from "../../content/services.json";
import reviewsJson from "../../content/reviews.json";
import educationJson from "../../content/education.json";

export type ServiceId =
  | "consultation"
  | "game-money-individual"
  | "game-perehody-individual"
  | "game-group";

export type SiteConfig = typeof siteJson;
export type Review = (typeof reviewsJson)[number];
export type Service = (typeof servicesJson.items)[number];

export const site: SiteConfig = siteJson;
export const services: Service[] = servicesJson.items;
export const serviceLabels: Record<ServiceId, string> = servicesJson.labels;

export const reviews: Review[] = reviewsJson;
export const education: string[] = educationJson;

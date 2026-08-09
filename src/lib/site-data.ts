import siteJson from "../../content/site.json";
import servicesJson from "../../content/services.json";

export type ServiceId =
  | "consultation"
  | "game-money-individual"
  | "game-money-group"
  | "game-perehody-individual"
  | "game-perehody-group";

export const bookingServiceIds: ServiceId[] = [
  "consultation",
  "game-money-individual",
  "game-money-group",
  "game-perehody-individual",
  "game-perehody-group",
];

export const isGameService = (service: ServiceId) => service !== "consultation";

export type SiteConfig = typeof siteJson;
export type Service = (typeof servicesJson.items)[number];

export const site: SiteConfig = siteJson;
export const services: Service[] = servicesJson.items;
export const serviceLabels: Record<ServiceId, string> = servicesJson.labels;

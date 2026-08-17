import siteJson from "../../content/site.json";
import servicesJson from "../../content/services.json";

export type SiteConfig = typeof siteJson;
export type Service = (typeof servicesJson.items)[number];

export const site: SiteConfig = siteJson;
export const services: Service[] = servicesJson.items;

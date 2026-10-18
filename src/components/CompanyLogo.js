import { SiCloudflare, SiShopify, SiTesla, SiToyota } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";

// Company name → logo (Simple Icons set bundled with react-icons). Add a line here when a new company appears in content/experience.js.
const LOGOS = {
  Cloudflare: SiCloudflare,
  Shopify: SiShopify,
  Tesla: SiTesla,
  Toyota: SiToyota,
  "University of Alberta": FaUniversity,
};

export function CompanyLogo({ company, ...props }) {
  const Icon = LOGOS[company];
  return Icon ? <Icon aria-hidden="true" {...props} /> : null;
}

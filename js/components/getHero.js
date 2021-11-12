import { baseUrl as url } from "../settings/api.js";

export const getHero = data => {
  const container = document.querySelector(".hero-banner");
  container.style = `background-image: url("${url}${data.hero_banner.formats.large.url}")`;
};

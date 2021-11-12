import { baseUrl, pathname } from "./settings/api.js";
import { getFeatured } from "./components/featured.js";
import { getProduct } from "./components/product.js";
import { getHero } from "./components/getHero.js";
import createMenu from "./utilities/createMenu.js";

const heroUrl = baseUrl + "/home";
const productsUrl = baseUrl + "/products";

createMenu();

(async () => {
  try {
    const response = await fetch(heroUrl);
    const data = await response.json();

    getHero(data);
    console.log(data);
  } catch (error) {
    console.dir(error);
  }
})();

(async () => {
  try {
    const response = await fetch(productsUrl);
    const data = await response.json();
    if (pathname === "/" || pathname === "/index.html") {
      getFeatured(data);
      console.log(data);
    } else {
      getProduct(data);
    }
  } catch (error) {
    console.dir(error);
  }
})();

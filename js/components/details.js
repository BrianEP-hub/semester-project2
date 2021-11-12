import { baseUrl } from "../settings/api.js";
import createMenu from "../utilities/createMenu.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const productUrl = baseUrl + "/products/" + id;

createMenu();

(async () => {
  const response = await fetch(productUrl);
  const details = await response.json();

  document.title = details.title;

  const container = document.querySelector(".container-details");

  let productImg = "";

  if (!details.image_url) {
    productImg = details.image_url;
  } else {
    productImg = baseUrl + details.image.formats.medium.url;
  }

  container.innerHTML = `
                        <div class="container-details-product">
                            <div class="card-image">
                            <img src="${productImg}" alt="${details.title}" />    
                            
                            </div>
                            <div class="card-content">
                                <h3>${details.title}</h3>
                                <p>${details.description}</p>
                                <p>Price: ${details.price}</p>
                            </div>
                            <div class="card-buttons">
                                <button class="cart-button"
                                 data-id="${details.id}"
                                 data-title="${details.title}"
                                 data-price="${details.price}"
                                 data-image="${productImg}">
                                 Add to cart
                                </button>
                            </div>
                        </div>
    `;
})();

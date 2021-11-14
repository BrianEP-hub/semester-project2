import { baseUrl } from "../settings/api.js";
import createMenu from "../utilities/createMenu.js";
import adminMenu from "../utilities/adminMenu.js";

createMenu();

const editProducts = async product => {
  const productsUrl = baseUrl + "/products";

  const container = document.querySelector(".container-products");

  try {
    const response = await fetch(productsUrl);
    const data = await response.json();

    data.forEach(product => {
      let imgUrl = "";

      if (!product.image_url) {
        imgUrl = product.image_url;
      } else {
        imgUrl = baseUrl + product.image.formats.small.url;
      }

      container.innerHTML += `
      <div class="card" style="background-image: url(${imgUrl})">
      
                                        <div class="card-content">
                                        <h3>${product.title}</h3>
                                        <p>${product.price} NOK</p>
                                        <a class="card-content-action" href="edit-product.html?id=${product.id}">Edit</a>
                                        </div>
                                    </div>
            
            `;
    });
  } catch (error) {
    console.dir(error);
  }
};

editProducts();

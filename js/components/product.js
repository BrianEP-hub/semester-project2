import { baseUrl as url } from "../settings/api.js";

export const getProduct = product => {
  const productContainer = document.querySelector(".container-products");

  productContainer.innerHTML = "";

  product.forEach(product => {
    let productImg = "";

    if (!product.image_url) {
      productImg = product.image_url;
    } else {
      productImg = url + product.image.formats.small.url;
    }
    productContainer.innerHTML += `
                              <div class="card" style="background-image: url(${productImg})">        
                                    <div class="card-content">
                                        <div class="card-content-description">
                                        <h3>${product.title}</h3>
                                        <p>Price: ${product.price} NOK</p>
                                        <a class="card-content-action" href="details.html?id=${product.id}">
                                        View more
                                        </a>         
                                        </div>
                                    </div>
                              </div>
                  `;
  });
};

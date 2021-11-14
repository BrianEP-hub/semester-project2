import { deleteButton } from "../components/deleteButton.js";
import { baseUrl } from "../settings/api.js";
import { getToken } from "./storage.js";
import { displayMessage } from "../common/displayMessage.js";

const token = getToken();

if (!token) {
  location.href = "index.html";
}

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const productUrl = baseUrl + "/products/" + id;

const form = document.querySelector("form");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const featured = document.querySelector("#featured");
const idInput = document.querySelector("#id");
const message = document.querySelector(".container-message");

(async () => {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    name.value = details.title;
    price.value = details.price;
    description.value = details.description;
    featured.value = details.featured;
    idInput.value = details.id;

    deleteButton(details.id);
  } catch (error) {
    console.dir(error);
  } finally {
    form.style.display = "block";
  }
})();

const editProduct = e => {
  e.preventDefault();

  message.innerHTML = "";

  const nameValue = name.value.trim();
  const priceValue = price.value.trim();
  const descriptionValue = description.value;
  const idValue = id.value;
  const featuredValue = featured.value;

  if (
    nameValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    descriptionValue.length === 0
  ) {
    return displayMessage(
      "warning",
      "Please ensure that you have entered correct",
      ".container-message",
    );
  }
  updateProduct(
    nameValue,
    priceValue,
    descriptionValue,
    idValue,
    featuredValue,
  );
};
form.addEventListener("submit", editProduct);

const updateProduct = async (title, price, description, featured, id) => {
  const url = baseUrl + "/products";

  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
    featured: featured,
  });

  const options = {
    method: "UPDATE",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.updated_at) {
      displayMessage("success", "Product updated", ".container-message");
    }
    if (json.error) {
      displayMessage("error", json.message, ".container-message");
    }
  } catch (error) {
    console.dir(error);
  }
};

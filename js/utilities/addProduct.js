import { displayMessage } from "../common/displayMessage.js";
import { getToken } from "./storage.js";
import { baseUrl } from "../settings/api.js";
import createMenu from "./createMenu.js";

createMenu();
const token = getToken();

if (!token) {
  location.href = "index.html";
}

const form = document.querySelector("#addProduct");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const imageUrl = document.querySelector("#image");
const featured = document.querySelector("#featured");
const description = document.querySelector("#description");
const message = document.querySelector(".container-message");

const submitForm = e => {
  e.preventDefault();

  message.innerHTML = "";

  const nameValue = name.value.trim();
  const priceValue = price.value.trim();
  const descriptionValue = description.value;
  const featuredValue = featured.value;
  const imageValue = imageUrl.value.trim();

  if (
    nameValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    imageValue.length === 0 ||
    descriptionValue === 0
  ) {
    return displayMessage(
      "warning",
      "Please ensure that you have the correct inputs",
      ".container-message",
    );
  }

  addProduct(
    nameValue,
    priceValue,
    descriptionValue,
    featuredValue,
    imageValue,
  );
};
form.addEventListener("submit", submitForm);

export const addProduct = async (
  title,
  price,
  description,
  image,
  featured,
) => {
  const url = baseUrl + "/products";

  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
    image_url: image,
    featured: featured,
  });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.created_at) {
      displayMessage("success", "Product added", ".container-message");
      form.reset();
    }

    if (json.error) {
      displayMessage("error", json.message, ".container-message");
    }
  } catch (error) {
    console.dir(error);
    displayMessage("error", "Something went wrong", ".container-message");
  }
};

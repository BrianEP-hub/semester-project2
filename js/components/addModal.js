import { addProduct } from "../utilities/addProduct.js";

const addModal = () => {
  const button = document.querySelector("#add");
  const container = document.querySelector(".modal-add-products");
  const close = document.querySelector(".close");

  if (button) {
    button.onclick = () => {
      container.style.display = "block";
    };
  }
  close.onclick = () => {
    container.style.display = "none";
  };
  addProduct;
};

export default addModal;

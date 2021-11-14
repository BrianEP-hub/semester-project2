import { getUsername } from "./storage.js";
import logoutButton from "../components/logoutButton.js";
import editModal from "../components/editModal.js";
import addModal from "../components/addModal.js";

const adminMenu = () => {
  const container = document.querySelector(".container-admin");

  const userName = getUsername();

  let adminLink = "";

  if (userName) {
    adminLink = `<div>
                        <button id="add">Add</button>
                        <button id="edit">Edit</button>
                        <span class="spacer"></span>
                        <button id="logout">Log out ${userName}</button>
                    `;
  }

  container.innerHTML = `${adminLink}`;

  editModal();
  addModal();
  logoutButton();
};

export default adminMenu;

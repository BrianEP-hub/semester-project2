import { baseUrl } from "../settings/api.js";
import { displayMessage } from "../common/displayMessage.js";
import createMenu from "../utilities/createMenu.js";
import { saveToken, saveUser, getToken } from "../utilities/storage.js";

createMenu();
const token = getToken();

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".container-message");

const submitForm = e => {
  e.preventDefault();

  message.innerHTML = "";

  const userValue = username.value.trim();
  const pwdValue = password.value.trim();

  if (userValue.length === 0 || pwdValue.length === 0) {
    return displayMessage(
      "warning",
      "Please enter username/password",
      ".container-message",
    );
  }
  login(userValue, pwdValue);
};

form.addEventListener("submit", submitForm);

const login = async (username, password) => {
  const url = baseUrl + "/auth/local";

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);

    if (data.user) {
      saveToken(data.jwt);
      saveUser(data.user);

      location.href = "/dashboard.html";
    }
    if (data.error) {
      displayMessage(
        "warning",
        "Username/password is not correct",
        ".container-message",
      );
    }
  } catch (error) {
    console.dir(error);
  }
};

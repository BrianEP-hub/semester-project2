import { getUsername } from "./storage.js";
import { pathname } from "../settings/api.js";
import logoutButton from "../components/logoutButton.js";

const createMenu = () => {
  const navbar = document.querySelector(".navbar");

  const username = getUsername();

  let authLink = `<a href="login.html" class="navbar-menu-item ${
    pathname === "/login.html" ? "active" : ""
  }">Login</a>`;

  if (username) {
    authLink = `<a href="dashboard.html" class="navbar-menu-item-auth ${
      pathname === "/dashboard.html" ? "active" : ""
    }">${username}</a> <button id="logout">Logout ${username}</button>
    `;
  }

  navbar.innerHTML = `<img src="../../assets/images/svg/logoipsum-logo-10.svg" class="logo" />     
                          <nav class="navbar-menu">
                            <a href="/" class="navbar-menu-item ${
                              pathname === "/" || pathname === "/index.html"
                                ? "active"
                                : ""
                            }">Home</a>
                            <a href="/products.html" class="navbar-menu-item ${
                              pathname === "/products.html" ? "active" : ""
                            }">Products</a>
                            ${authLink}
                        </nav>
                      <a class="navbar-menu-button" href="#">Subscribe</a>`;
  logoutButton();
};

export default createMenu;

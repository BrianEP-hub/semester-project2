import { getUsername } from "./storage.js";
import { pathname } from "../settings/api.js";

const createMenu = () => {
  const navbar = document.querySelector(".navbar");

  const username = getUsername();

  let authLink = `<a href="login.html" class="navbar-menu-item ${
    pathname === "/login.html" ? "active" : ""
  }">Login</a>`;

  if (username) {
    authLink = `Logged in as: <a href="dashboard.html" class="navbar-menu-item-auth ${
      pathname === "/dashboard.html" ? "active" : ""
    }">${username}</a>
    <button class="navbar-menu-button-logout navbar-item-auth" id="logout">Log out</button>
    `;
  }

  navbar.innerHTML = `<img src="#" class=""/>     
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
};

export default createMenu;

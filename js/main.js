const servicesLink = document.querySelector(".services-link");
const headerDropdownMenu = document.querySelector(".header-dropdown-menu");

servicesLink.addEventListener("mouseover", (e) => {
  headerDropdownMenu.classList.add("header-dropdown-menu-active");
});

servicesLink.addEventListener("mouseleave", (e) => {
  headerDropdownMenu.classList.remove("header-dropdown-menu-active");
});

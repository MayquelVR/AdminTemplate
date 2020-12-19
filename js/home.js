document
  .getElementById("btn-show-sidebar")
  .addEventListener("click", function () {
    document.getElementById("page-content-overlay").classList.remove("d-none");
    document
      .getElementById("page-sidebar")
      .classList.replace("page-sidebar", "page-sidebar-mobile");
    document
      .getElementById("page-sidebar")
      .classList.remove("d-none", "d-lg-block");
  });

document
  .getElementById("page-content-overlay")
  .addEventListener("click", function () {
    document
      .getElementById("page-sidebar")
      .classList.replace("page-sidebar-mobile", "page-sidebar");
    document
      .getElementById("page-sidebar")
      .classList.add("d-none", "d-lg-block");
    document.getElementById("page-content-overlay").classList.add("d-none");
  });

const navLinks = document.getElementById("nav-menu").getElementsByTagName("a");
Array.from(navLinks).forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = link.parentElement;
    parent.classList.contains('open')
      ? parent.classList.remove("open")
      : parent.classList.add("open");
  });
});

const headerIcons = document
  .getElementsByTagName("header")
  ["0"].querySelectorAll(".header-icon");
Array.from(headerIcons).forEach((headerIcon) => {
  headerIcon.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = headerIcon.parentElement;
    parent.classList.contains('show')
      ? parent.classList.remove("show")
      : parent.classList.add("show");
  });
});

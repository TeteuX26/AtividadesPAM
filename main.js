const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const icon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});


menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});


document.addEventListener("#", (e) => {
  if (!menu.contains(e.target) && e.target !== menuBtn) {
    menu.classList.remove("show");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});


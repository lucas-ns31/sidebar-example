var overlay = document.querySelector(".overlay");

function toggleSidebar(onActive) {
  const toggleMenuIcon = document.querySelector(".toggleMenuIcon");
  const toggleSidebar = document.querySelector(".sidebar");

  if (onActive) {
    toggleMenuIcon.classList.toggle("active");
    toggleSidebar.classList.toggle("activeSidebar");
    overlay.classList.toggle("activeOverlay");
  } else {
    toggleMenuIcon.classList.remove("active");
    toggleSidebar.classList.remove("activeSidebar");
    overlay.classList.remove("activeOverlay");
  }
}

overlay.addEventListener("click", () => {
  toggleSidebar(false);
});

const themeSwitcher = document.querySelector(".theme-switcher");
let activeTheme = localStorage.getItem("theme");

themeSwitcher.addEventListener("click", (e) => {
  if (e.target.tagName != "INPUT") {
    return;
  }

  const themeToActivate = e.target.id;
  changeTheme(themeToActivate);
});

function changeTheme(theme) {
  if (theme === "system") {
    localStorage.removeItem("theme");
    document.body.removeAttribute("data-theme");
  } else {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }
}

window.onload = () => {
  if (activeTheme) {
    document.getElementById(activeTheme).checked = true;
    changeTheme(activeTheme);
  }
};

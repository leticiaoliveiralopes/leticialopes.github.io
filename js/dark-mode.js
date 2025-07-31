/*
 * dark-mode.js
 *
 * This script adds a light/dark toggle behavior
 * behavior to the site. It looks for an element with the `.js-toggle` class and
 * responds to clicks by adding or removing the `dark-mode` class from the
 * element `<body>`. The state is stored in localStorage so that
 * the user's preference persists for future visits.
 */
(function() {
  // make sure the DOM is ready
  var body = document.body;
  var switcher = document.getElementsByClassName("js-toggle")[0];
  if (!switcher) return;

  // Set the initial state based on localStorage
  if (localStorage.getItem("darkMode")) {
    switcher.classList.add("js-toggle--checked");
    body.classList.add("dark-mode");
  }

  // Add the click listener to switch mode
  switcher.addEventListener("click", function () {
    this.classList.toggle("js-toggle--checked");
    this.classList.add("js-toggle--focus");

    if (this.classList.contains("js-toggle--checked")) {
      // activate dark mode
      body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      // disable dark mode
      body.classList.remove("dark-mode");
      // remove the key from localStorage after a short delay
      setTimeout(function () {
        localStorage.removeItem("darkMode");
      }, 100);
    }
  });
})();

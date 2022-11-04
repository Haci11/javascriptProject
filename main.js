window.onload = function () {
  const panels = document.querySelectorAll(".panel");
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const container = document.querySelector(".container");
  const boxes = document.querySelectorAll(".box");

  // For images in index.html

  for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", () => {
      removeActiveClasses();
      panels[i].classList.add("active");
    });
  }

  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }

  //For Nav

  open.addEventListener("click", () => container.classList.add("show-nav"));
  close.addEventListener("click", () => container.classList.remove("show-nav"));

  //For Scrolling Animation

  window.addEventListener("scroll", checkBoxes);
  checkBoxes();

  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 3;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      boxTop < triggerBottom
        ? box.classList.add("show")
        : box.classList.remove("show");
    });
  }
};

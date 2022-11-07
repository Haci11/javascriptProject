window.onload = function () {
  const panels = document.querySelectorAll(".panel");
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const container = document.querySelector(".container");
  const boxes = document.querySelectorAll(".box");
  const body = document.querySelector("body");

  function handelOpenMenu() {
    container.classList.add("show-nav");
    body.style.overflow = "hidden";
  }

  function handelCloseMenu() {
    container.classList.remove("show-nav");
    body.style.overflow = "unset";
  }

  // For images in index.html

  panels.forEach((panel) =>
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
      console.log("b");
    })
  );

  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }
  //For Nav

  open.addEventListener("click", () => handelOpenMenu());
  close.addEventListener("click", () => handelCloseMenu());

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

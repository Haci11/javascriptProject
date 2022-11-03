window.onload = function () {
  const panels = document.querySelectorAll(".panel");
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const container = document.querySelector(".container");
  const boxes = document.querySelectorAll(".box");

  window.addEventListener("scroll", checkBoxes);
  checkBoxes();
  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }

  open.addEventListener("click", () => container.classList.add("show-nav"));
  close.addEventListener("click", () => container.classList.remove("show-nav"));

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
};

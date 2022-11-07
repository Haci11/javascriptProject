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

  // For Game
  const score0El = document.querySelector("#score--0");
  const score1El = document.getElementById("score--1");
  const diceEl = document.querySelector(".dice");
  const current0El = document.getElementById("current--0");
  const current1El = document.getElementById("current--1");
  const player0El = document.querySelector(".player--0");
  const player1El = document.querySelector(".player--1");

  const btnNew = document.querySelector(".btn--new");
  const btnRoll = document.querySelector(".btn--roll");
  const btnhold = document.querySelector(".btn--hold");

  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");

  const scores = [0, 0];
  let currentScore = 0;
  let activePlayer = 0;
  let playing = true;

  const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  };

  btnRoll.addEventListener("click", function () {
    const dice = Math.trunc(Math.random() * 6) + 1;
    if (playing) {
      diceEl.classList.remove("hidden");
      diceEl.src = `/assets/dice-${dice}.png`;

      if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
      } else {
        switchPlayer();
      }
    }
  });
  btnhold.addEventListener("click", function () {
    if (playing) {
      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];

      if (scores[activePlayer] >= 100) {
        playing = false;
        diceEl.classList.add("hidden");

        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add("player--winner");
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove("player--acrive");
      } else {
        switchPlayer();
      }
    }
  });
};

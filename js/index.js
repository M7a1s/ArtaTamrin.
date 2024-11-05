const btnLightDark = document.getElementsByClassName("btnLightDark");
const main = document.getElementById("main");
const Circle = document.getElementsByClassName("circle");
const Img = document.getElementsByClassName("Img");
const Error = document.getElementById("Error");
const body = document.body;
const card2 = document.getElementsByClassName("card2");
const MenuList = document.getElementById("MenuList");
const navHeader = document.getElementById("navHeader");
const backnav = document.getElementById("backnav");

setTimeout(() => {
  console.clear();
}, 1000);

window.addEventListener("resize", () => {
  if (window.innerWidth <= 315) {
    body.classList.replace("flex", "hidden");
  } else {
    body.classList.replace("hidden", "flex");
  }

  if (window.innerWidth <= 1024) {
    navHeader.classList.replace("mobile:w-1/2", "mobile:w-0");
    backnav.classList.replace("opacity-100", "opacity-0");
    backnav.classList.replace("pointer-events-auto", "pointer-events-none");
  }
});

function LightDark() {
  if (main.classList.contains("dark")) {
    main.classList.replace("dark", "light");
    Circle[0].classList.replace("left-1", "left-7");
    Circle[1].classList.replace("left-1", "left-7");
    Img[0].src = `./icon/LogoLight.png`;
    Img[1].src = `./icon/Portal2.png`;
    Img[2].src = `./icon/Dawn2.png`;
    Img[3].src = `./icon/Dawn2.png`;
    Img[4].src = `./icon/back2.png`;
  } else {
    main.classList.replace("light", "dark");
    Circle[0].classList.replace("left-7", "left-1");
    Circle[1].classList.replace("left-7", "left-1");
    Img[0].src = `./icon/Logo.png`;
    Img[1].src = `./icon/Portal.png`;
    Img[2].src = `./icon/Dawn.png`;
    Img[3].src = `./icon/Dawn.png`;
    Img[4].src = `./icon/back.png`;
  }
}

for (let i = 0; i < btnLightDark.length; i++) {
  btnLightDark[i].addEventListener("click", LightDark);
}

function Check() {
  if (window.innerWidth <= 400) {
    MenuList.classList.add("top-2");
  } else {
    MenuList.classList.add("top-8");
  }
}

function RemoveCheck() {
  if (MenuList.classList.contains("top-2")) {
    MenuList.classList.remove("top-2");
  } else {
    MenuList.classList.remove("top-8");
  }
}

MenuList.addEventListener("click", () => {
  if (navHeader.classList.contains("mobile:w-0")) {
    navHeader.classList.replace("mobile:w-0", "mobile:w-1/2");
    backnav.classList.replace("opacity-0", "opacity-100");
    backnav.classList.replace("pointer-events-none", "pointer-events-auto");
    MenuList.classList.replace("right-5", "right-2");
    Check();
  } else {
    navHeader.classList.replace("mobile:w-1/2", "mobile:w-0");
    backnav.classList.replace("opacity-100", "opacity-0");
    backnav.classList.replace("pointer-events-auto", "pointer-events-none");
    MenuList.classList.replace("right-2", "right-5");
    RemoveCheck();
  }
});

backnav.addEventListener("click", () => {
  navHeader.classList.replace("mobile:w-1/2", "mobile:w-0");
  backnav.classList.replace("opacity-100", "opacity-0");
  backnav.classList.replace("pointer-events-auto", "pointer-events-none");
  MenuList.classList.replace("right-2", "right-5");
  RemoveCheck();
});

document.addEventListener(
  "touchstart",
  function (e) {
    if (e.touches.length > 1) {
      e.preventDefault(); // Prevent zooming if two fingers are used
    }
  },
  { passive: false }
);

document.addEventListener("gesturestart", function (e) {
  e.preventDefault(); // Prevent zooming gestures
});

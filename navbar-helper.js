export function Menu(e) {
    let list = document.querySelector("ul");
    const navbar = document.querySelector('.fixed');

    e.name === "menu"
      ? ((e.name = "close"),
        list.classList.add("top-[80px]"),
        list.classList.add("opacity-100"),
        navbar.classList.add("inset-0"),
        navbar.classList.add("overflow-y-scroll"))
      : ((e.name = "menu"),
        list.classList.remove("top-[80px]"),
        list.classList.remove("opacity-100"),
        navbar.classList.remove("inset-0"),
        navbar.classList.remove("overflow-y-scroll"));
  }


   
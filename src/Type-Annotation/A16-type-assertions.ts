const body = document.querySelector("body");
if (body) body.style.background = "#ff000";

// Non-null Operation
const body2 = document.querySelector("body")!;
body2.style.background = "#ff000";

// Type assertion
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.background = "#ff000";

// HTMLElement
const body4 = document.querySelector(".input") as HTMLInputElement;
body4.value = "Um valor qualquer";




const img = document.getElementsByTagName("img")[0];
img.addEventListener(
  "mouseover",
  e => ((e.target as HTMLImageElement).src = "./stage2.png"),
);
img.addEventListener(
  "mouseout",
  e => ((e.target as HTMLImageElement).src = "./stage1.png"),
);

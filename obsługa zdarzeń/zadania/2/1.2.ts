const paragraf = document.getElementsByClassName(
  "wyroznione"
)[0] as HTMLParagraphElement;
paragraf!.addEventListener(
  "dblclick",
  (e) => ((e.target as HTMLParagraphElement).textContent = "puławski")
);
paragraf!.addEventListener("mouseover", (e) =>
  console.log((e.target as HTMLParagraphElement).textContent)
);

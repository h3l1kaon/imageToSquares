$("document").ready(function () {
  const toSlice = $("#toSlice")[0];
  const getDimentions = () => {
    const elWidth = window.screen.availWidth;
    const elHeight = (elWidth / 16) * 9;
    return {
      elWidth,
      elHeight,
    };
  };
  window.addEventListener("resize", () => console.log("resized"));
  const dimentions = getDimentions();
  console.log("dimentions", dimentions);
  console.log("container :", $("#container")[0]);
  $("#container").css({
    width: dimentions.elWidth,
    height: dimentions.elHeight,
  });

  const imageSrc = $("img")[0].src;
  const elWidth = dimentions.elWidth;
  const elHeight = dimentions.elHeight;
  const gridX = 16,
    gridY = 10;

  const slice = () => {
    for (x = 0; x < gridX; x++) {
      for (y = 0; y < gridY; y++) {
        const newDiv = document.createElement("div");
        const width = (x * elWidth) / gridX;
        const height = (y * elHeight) / gridY;
        newDiv.style.width = elWidth / gridX + 1 + "px";
        newDiv.style.height = elHeight / gridY + "px";
        newDiv.style.top = height + "px";
        newDiv.style.left = width + "px";
        newDiv.style.backgroundImage = "url(" + imageSrc + ")";
        newDiv.style.backgroundPosition =
          "-" + width + "px " + "-" + height + "px";
        newDiv.style.backgroundSize = elWidth + "px";
        newDiv.classList.add("active");
        if (width >= elWidth / 2) {
          newDiv.classList.add("fade_right");
        }
        newDiv.addEventListener("mouseover", () => {
          newDiv.classList.remove("active");
        });
        toSlice.appendChild(newDiv);
      }
    }
  };
  slice();
});

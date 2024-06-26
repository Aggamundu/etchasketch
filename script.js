const container = document.querySelector("#container");
for(let i = 0;i<256;i++){
  const square = document.createElement("div");
  square.setAttribute("style", "height:90px; width:90px; background:red;display:flex; flex-direction:column;");
  container.append(square);
}

const container = document.querySelector("#container");
function createGrid(size){
  gridSize = size * size;
  gridDim = 960/size;
  for(let i = 0;i<gridSize;i++){
    const square = document.createElement("div");
    square.setAttribute("style", "height:60px; width:60px; background:red;display:flex; flex-direction:column; border:0px solid black;");
    square.addEventListener('mouseover',()=>{
      square.style.backgroundColor = 'blue';
    })
    square.addEventListener('mouseout',()=>{
      square.style.backgroundColor = "red";
    })
    container.append(square);
  }
}


const gridBtn = document.querySelector("#gridBtn");
var gridInput = 0;
function showPrompt(){
  gridInput = prompt("Enter dimensions");

}
gridBtn.addEventListener('click',showPrompt);



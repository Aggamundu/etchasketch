const container = document.querySelector("#container");
function createGrid(size){
  gridSize = size * size;
  const computedStyle = window.getComputedStyle(container);
  const boardDim = computedStyle.getPropertyValue('width');

  gridDim = 500/size;
  console.log(boardDim);
  for(let i = 0;i<gridSize;i++){
    const square = document.createElement("div"); //when using template literals, you have to use backticks ` not single quotes '
    square.setAttribute("style", `height:${gridDim}px; width:${gridDim}px; background:red;display:flex; flex-direction:column; border:0px solid black;`);
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

function showPrompt(){
  let gridInput = parseInt(prompt("Enter dimensions from [0,100)"));
    if(gridInput>100 || gridInput<=0){
      showPrompt();
    }
  container.replaceChildren();
  createGrid(gridInput);
}



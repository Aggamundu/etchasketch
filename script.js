const container = document.querySelector("#container");
let mouseDown = false
let greyscale = true;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
createGrid(16);
function createGrid(size){
  gridSize = size * size;
  const computedStyle = window.getComputedStyle(container);
  const boardDim = computedStyle.getPropertyValue('width');
  gridDim = 500/size;
  console.log(boardDim);
  for(let i = 0;i<gridSize;i++){
    const square = document.createElement("div"); //when using template literals, you have to use backticks ` not single quotes '
    square.setAttribute("style", `height:${gridDim}px; width:${gridDim}px; background:white;display:flex; flex-direction:column; border:0px solid black;`);
    square.addEventListener('mouseover',()=>{
      if(!mouseDown){
        return;
      }
      else if (greyscale){
        square.style.backgroundColor = 'black';
      }
      else{
        const R = Math.floor(Math.random() * 256);
        const G = Math.floor(Math.random() * 256);
        const B = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${R},${G},${B})`
      }
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

function erase(){
  const childDivs = container.querySelectorAll('div');
  for(const square of childDivs){
  square.style.backgroundColor = 'white';
  }
}

function color(){
  greyscale = false;
}

function blackwhite(){
  greyscale = true;
}





const inputElement = document.getElementById('array-input') as HTMLInputElement;
const container = document.getElementById('array-container');
let array11=0;

async function startSorting(){
  console.log(inputElement.value.split(',').map(Number).length)
  const input = inputElement.value;
   const array = input.split(',').map(Number);//[2,4,1,5] 2 1 4
  if (!container) {
    console.error("Container element not found");
    return;
  }
  array11=1;
  if (array11==1) {
    button.disabled = true;
  }
  
  // /////
  let array1=(inputElement.value).split(',').map(Number);
  console.log(array11,"112")
  const h22 = document.createElement('h2');
  const cont22 = document.createElement('div');  
  const cont222 = document.createElement('div');  
  h22.textContent="The array before sorting is : ";
  array.forEach((value) => {
    const block = document.createElement("div");
    block.classList.add("block2");
    block.textContent = value.toString();
    cont22.appendChild(block);
  });
  cont22.style.display="flex"
  cont22.style.gap = "20px";
    cont222.appendChild(h22);
    cont222.appendChild(cont22);
  container.appendChild(cont222);
///////
const blocks = document.querySelectorAll(".block");

  for (let index = 1; index < array.length; index++) {
    let element = array[index];
    let j=index-1;//2-1=1
    await beforeSort(array,element,0);
    while ( j>=0 && array[j]>element) {
      
      let e=array[j + 1];
      
      array[j+1]=array[j];
      array[j]=e;
      // 
     
      await beforeSort(array,element,0);
      j--;
     
    }
    array[j+1]=element;
    await beforeSort(array,element,1);
  }

  const h2 = document.createElement('h2');
  const cont = document.createElement('div');  
  const contt = document.createElement('div');  
  h2.textContent="The array after sorting is : ";
  array.forEach((value) => {
    const block = document.createElement("div");
    block.classList.add("block");
    block.textContent = value.toString();
    cont.appendChild(block);
  });
  cont.style.display="flex"
  cont.style.gap = "20px";
  contt.appendChild(h2);
  contt.appendChild(cont);
  container?.appendChild(contt);
}

async function beforeSort(array: number[],element:number,m:number){
  const cont = document.createElement('div');  
  if (!container) {
    console.error("Container element not found");
    return;
  }
  for (let index = 0; index <array.length; index++) {
    const bar = document.createElement('div');
    bar.textContent = array[index].toString();; 
    cont.style.display = 'flex';
    cont.style.gap = '10px';
    bar.classList.add("block1");
    if(array[index]==element){
      bar.style.backgroundColor = 'red';
    }
     if(array[index]==element&&m==1){
      bar.style.backgroundColor = 'green';
    }

      cont.appendChild(bar);
   

   }

   const p = document.createElement('p');
   if(m==0){
    p.textContent = " Sort number: " + element;

   }else{
    p.textContent = " Number " + element + " after sorting";

   }
    container.appendChild(p);
    container.appendChild(cont);
    const br = document.createElement('br');
    container.appendChild(br); 
   await sleep(500); // Adjust the time to control the delay (in ms)


}



async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const input1Element = <HTMLInputElement>document.getElementById('array-input');
const button = <HTMLButtonElement>document.getElementById('sort-button');
document.addEventListener('DOMContentLoaded', () => {

  if (input1Element && button) {
    input1Element.addEventListener('input', checkInput);
  }

  function checkInput(): void {
      if (input1Element.value.trim() === "" ) {
          button.disabled = true;
      } else {
          button.disabled = false;
      }
  }
});

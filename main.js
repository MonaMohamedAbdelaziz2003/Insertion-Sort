"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inputElement = document.getElementById('array-input');
const container = document.getElementById('array-container');
let array11 = 0;
function startSorting() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(inputElement.value.split(',').map(Number).length);
        const input = inputElement.value;
        const array = input.split(',').map(Number); //[2,4,1,5] 2 1 4
        if (!container) {
            console.error("Container element not found");
            return;
        }
        array11 = 1;
        if (array11 == 1) {
            button.disabled = true;
        }
        // /////
        let array1 = (inputElement.value).split(',').map(Number);
        console.log(array11, "112");
        const h22 = document.createElement('h2');
        const cont22 = document.createElement('div');
        const cont222 = document.createElement('div');
        h22.textContent = "The array before sorting is : ";
        array.forEach((value) => {
            const block = document.createElement("div");
            block.classList.add("block2");
            block.textContent = value.toString();
            cont22.appendChild(block);
        });
        cont22.style.display = "flex";
        cont22.style.gap = "20px";
        cont222.appendChild(h22);
        cont222.appendChild(cont22);
        container.appendChild(cont222);
        ///////
        const blocks = document.querySelectorAll(".block");
        for (let index = 1; index < array.length; index++) {
            let element = array[index];
            let j = index - 1; //2-1=1
            yield beforeSort(array, element, 0);
            while (j >= 0 && array[j] > element) {
                let e = array[j + 1];
                array[j + 1] = array[j];
                array[j] = e;
                // 
                yield beforeSort(array, element, 0);
                j--;
            }
            array[j + 1] = element;
            yield beforeSort(array, element, 1);
        }
        const h2 = document.createElement('h2');
        const cont = document.createElement('div');
        const contt = document.createElement('div');
        h2.textContent = "The array after sorting is : ";
        array.forEach((value) => {
            const block = document.createElement("div");
            block.classList.add("block");
            block.textContent = value.toString();
            cont.appendChild(block);
        });
        cont.style.display = "flex";
        cont.style.gap = "20px";
        contt.appendChild(h2);
        contt.appendChild(cont);
        container === null || container === void 0 ? void 0 : container.appendChild(contt);
    });
}
function beforeSort(array, element, m) {
    return __awaiter(this, void 0, void 0, function* () {
        const cont = document.createElement('div');
        if (!container) {
            console.error("Container element not found");
            return;
        }
        for (let index = 0; index < array.length; index++) {
            const bar = document.createElement('div');
            bar.textContent = array[index].toString();
            ;
            cont.style.display = 'flex';
            cont.style.gap = '10px';
            bar.classList.add("block1");
            if (array[index] == element) {
                bar.style.backgroundColor = 'red';
            }
            if (array[index] == element && m == 1) {
                bar.style.backgroundColor = 'green';
            }
            cont.appendChild(bar);
        }
        const p = document.createElement('p');
        if (m == 0) {
            p.textContent = " Sort number: " + element;
        }
        else {
            p.textContent = " Number " + element + " after sorting";
        }
        container.appendChild(p);
        container.appendChild(cont);
        const br = document.createElement('br');
        container.appendChild(br);
        yield sleep(500); // Adjust the time to control the delay (in ms)
    });
}
function sleep(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => setTimeout(resolve, ms));
    });
}
const input1Element = document.getElementById('array-input');
const button = document.getElementById('sort-button');
document.addEventListener('DOMContentLoaded', () => {
    if (input1Element && button) {
        input1Element.addEventListener('input', checkInput);
    }
    function checkInput() {
        if (input1Element.value.trim() === "") {
            button.disabled = true;
        }
        else {
            button.disabled = false;
        }
    }
});
// ظظظظظظظظظظظظظظظظظظظظظظظ
// const inputElement = document.getElementById('array-input') as HTMLInputElement;
// const container = document.getElementById('array-container');
// let array11 = 0;
// async function startSorting() {
//     console.log(inputElement.value.split(',').map(Number).length);
//     const input = inputElement.value;
//     const array = input.split(',').map(Number); // [2,4,1,5] -> 2 1 4
//     if (!container) {
//         console.error("Container element not found");
//         return;
//     }
//     array11 = 1;
//     if (array11 == 1) {
//         button.disabled = true;
//     }
//     // Display the initial array
//     let array1 = input.split(',').map(Number);
//     console.log(array11, "112");
//     const h22 = document.createElement('h2');
//     const cont22 = document.createElement('div');
//     const cont222 = document.createElement('div');
//     h22.textContent = "The array before sorting is : ";
//     array.forEach((value) => {
//         const block = document.createElement("div");
//         block.classList.add("block2");
//         block.textContent = value.toString();
//         cont22.appendChild(block);
//     });
//     cont22.style.display = "flex";
//     cont22.style.gap = "20px";
//     cont222.appendChild(h22);
//     cont222.appendChild(cont22);
//     container.appendChild(cont222);
//     // Sorting with delay
//     for (let index = 1; index < array.length; index++) {
//         let element = array[index];
//         let j = index - 1; // 2-1=1
//         await beforeSort(array, element, 0);
//         while (j >= 0 && array[j] > element) {
//             let e = array[j + 1];
//             array[j + 1] = array[j];
//             array[j] = e;
//             await beforeSort(array, element, 0);
//             j--;
//         }
//         array[j + 1] = element;
//         await beforeSort(array, element, 1);
//     }
//     // Display the sorted array
//     const h2 = document.createElement('h2');
//     const cont = document.createElement('div');
//     const contt = document.createElement('div');
//     h2.textContent = "The array after sorting is : ";
//     array.forEach((value) => {
//         const block = document.createElement("div");
//         block.classList.add("block");
//         block.textContent = value.toString();
//         cont.appendChild(block);
//     });
//     cont.style.display = "flex";
//     cont.style.gap = "20px";
//     contt.appendChild(h2);
//     contt.appendChild(cont);
//     container?.appendChild(contt);
// }
// async function beforeSort(array: number[], element: number, m: number) {
//     const cont = document.createElement('div');
//     if (!container) {
//         console.error("Container element not found");
//         return;
//     }
//     // Display the array with updated elements
//     for (let index = 0; index < array.length; index++) {
//         const bar = document.createElement('div');
//         bar.textContent = array[index].toString();
//         cont.style.display = 'flex';
//         cont.style.gap = '10px';
//         bar.classList.add("block1");
//         if (array[index] == element) {
//             bar.style.backgroundColor = 'red';
//         }
//         if (array[index] == element && m == 1) {
//             bar.style.backgroundColor = 'green';
//         }
//         cont.appendChild(bar);
//     }
//     const p = document.createElement('p');
//     if (m == 0) {
//         p.textContent = "Sort number: " + element;
//     } else {
//         p.textContent = "Number " + element + " after sorting";
//     }
//     container.appendChild(p);
//     container.appendChild(cont);
//     const br = document.createElement('br');
//     container.appendChild(br);
//     // Wait before continuing
//     await sleep(500); // Adjust the time to control the delay (in ms)
// }
// async function sleep(ms: number) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// const input1Element = <HTMLInputElement>document.getElementById('array-input');
// const button = <HTMLButtonElement>document.getElementById('sort-button');
// document.addEventListener('DOMContentLoaded', () => {
//     if (input1Element && button) {
//         input1Element.addEventListener('input', checkInput);
//     }
//     function checkInput(): void {
//         if (input1Element.value.trim() === "" || array11 == 1) {
//             button.disabled = true;
//         } else {
//             button.disabled = false;
//         }
//     }
// });
// // دالة لتحريك العناصر في الصفحة (قبل وبعد الترتيب)
// function beforeSort(array: number[], element: number, moveType: number) {
//   const blocks = document.querySelectorAll(".block") as NodeListOf<HTMLElement>;
//   if (moveType === 0) {
//     // تحريك العناصر قبل الترتيب
//     blocks.forEach((block, index) => {
//       block.style.transform = `translateX(${index * 60}px)`;
//     });
//   } else if (moveType === 1) {
//     // تحريك العناصر بعد الترتيب
//     blocks.forEach((block, index) => {
//       block.style.transform = `translateX(${index * 60}px)`;
//     });
//   }
// }
// async function startSorting() {
//   const input = inputElement.value;
//   const array = input.split(',').map(Number); // [2, 4, 1, 5]
//   if (!container) {
//     console.error("Container element not found");
//     return;
//   }
//   // إنشاء العناصر لعرض المصفوفة قبل الترتيب
//   const h22 = document.createElement('h2');
//   const cont22 = document.createElement('div');
//   const cont222 = document.createElement('div');
//   h22.textContent = "The array before sorting is : ";
//   array.forEach((value) => {
//     const block = document.createElement("div");
//     block.classList.add("block");
//     block.textContent = value.toString();
//     cont22.appendChild(block);
//   });
//   cont22.style.display = "flex";
//   cont22.style.gap = "20px";
//   cont222.appendChild(h22);
//   cont222.appendChild(cont22);
//   container?.appendChild(cont222);
//   // الترتيب باستخدام خوارزمية الـ Insertion Sort
//   for (let index = 1; index < array.length; index++) {
//     let element = array[index];
//     let j = index - 1; // 2 - 1 = 1
//     // تحريك العناصر قبل الترتيب
//     beforeSort(array, element, 0);
//     while (j >= 0 && array[j] > element) {
//       // تحريك العنصر السابق إلى اليمين
//       const prevBlock = document.querySelectorAll(".block")[j] as HTMLElement;
//       prevBlock.style.transform = `translateX(${(j + 1 - index) * 60}px)`;
//       await sleep(500);
//       // تبديل العناصر في المصفوفة
//       array[j + 1] = array[j];
//       j--;
//       beforeSort(array, element, 0);
//     }
//     array[j + 1] = element;
//     beforeSort(array, element, 1);
//   }
//   // عرض المصفوفة بعد الترتيب
//   const h2 = document.createElement('h2');
//   const p = document.createElement('p');
//   const cont = document.createElement('div');
//   h2.textContent = "The array after sorting is : ";
//   p.textContent = array.join(", ");
//   cont.appendChild(h2);
//   cont.appendChild(p);
//   container?.appendChild(cont);
// }
// ///////////////////////////
// const container = document.getElementById("container") as HTMLDivElement;
// // Initial array
// const array = [5, 3, 8, 6, 2];
// // Create the blocks
// array.forEach((value) => {
//   const block = document.createElement("div");
//   block.classList.add("block");
//   block.textContent = value.toString();
//   container.appendChild(block);
// });
// async function sleep(ms: number):Promise<void> {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// async function insertionSort() {
//   const blocks = document.querySelectorAll(".block") as NodeListOf<HTMLElement>;
//   for (let i = 1; i < blocks.length; i++) {
//     let j = i - 1;
//     const current = blocks[i] as HTMLElement;
//     const currentValue = parseInt(current.textContent || "0");
//     current.classList.add("moving");
//     // Move current block up
//     current.style.transform = "translateY(-60px)";
//     await sleep(500);
//     while (j >= 0 && parseInt(blocks[j].textContent || "0") > currentValue) {
//       const prevBlock = blocks[j] as HTMLElement;
//       // Move the previous block to the right
//       prevBlock.style.transform = `translateX(${(j + 1 - i) * 60}px)`;
//       j--;
//       await sleep(500);
//     }
//     // Place current block in the correct position
//     current.style.transform = `translateX(${(j + 1 - i) * 60}px) translateY(0px)`;
//     container.insertBefore(current, blocks[j + 1]?.nextSibling || null);
//     await sleep(500);
//     // Reset positions
//     blocks.forEach((block) => (block.style.transform = ""));
//     current.classList.remove("moving");
//   }
// }
// async function startSort() {
//   await insertionSort();
// }
// function sr() {
//  return "mm";
// }
// // momna///////////////////
// const container = document.getElementById("container") as HTMLDivElement | null;
// // هذه الدالة لتحويل النص المدخل إلى مصفوفة من الأرقام
// function getArrayFromInput(): number[] {
//   const inputElement = document.getElementById("inputNumbers") as HTMLInputElement | null;
//   if (inputElement) {
//     const input = inputElement.value;
//     return input.split(',').map((num: string) => parseInt(num.trim())).filter(num => !isNaN(num));
//   } else {
//     alert("Input element not found!");
//     return [];
//   }
// }
// // هذه الدالة لإنشاء العناصر داخل الحاوية (المصفوفة المدخلة)
// function createBlocks(array: number[]): void {
//   if (container) {
//     container.innerHTML = ''; // لتفريغ الحاوية قبل إضافة العناصر الجديدة
//     array.forEach((value: number) => {
//       const block = document.createElement("div");
//       block.classList.add("block");
//       block.textContent = value.toString();
//       container.appendChild(block);
//     });
//   } else {
//     console.error("Container not found!");
//   }
// }
// async function sleep(ms: number): Promise<void> {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function insertionSort(): Promise<void> {
//   const blocks = document.querySelectorAll(".block") as NodeListOf<HTMLElement>;
//   for (let i = 1; i < blocks.length; i++) {
//     let j = i - 1;
//     const current = blocks[i] as HTMLElement;
//     const currentValue = parseInt(current.textContent || "0");
//     current.classList.add("moving");
//     // Move current block up
//     current.style.transform = "translateY(-60px)";
//     await sleep(500);
//     while (j >= 0 && parseInt(blocks[j].textContent || "0") > currentValue) {
//       const prevBlock = blocks[j] as HTMLElement;
//       // Move the previous block to the right
//       prevBlock.style.transform = `translateX(${(j + 1 - i) * 60}px)`;
//       j--;
//       await sleep(500);
//     }
//     // Place current block in the correct position
//     current.style.transform = `translateX(${(j + 1 - i) * 60}px) translateY(0px)`;
//     if (container) {
//       container.insertBefore(current, blocks[j + 1]?.nextSibling || null);
//     }
//     await sleep(500);
//     // Reset positions
//     blocks.forEach((block: HTMLElement) => (block.style.transform = ""));
//     current.classList.remove("moving");
//   }
// }
//  async function startSort(): Promise<void> {
//   const array = getArrayFromInput(); // الحصول على الأرقام من الإدخال
//   if (array.length === 0) {
//     alert("Please enter valid numbers separated by commas.");
//     return;
//   }
//   createBlocks(array); // إنشاء العناصر داخل الحاوية
//   await insertionSort(); // بدء الترتيب
// }

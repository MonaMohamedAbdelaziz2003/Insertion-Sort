let array=[2,3,1];


for (let index = 1; index < array.length; index++) {
    let element = array[index];
    let j=index-1;//2-1=1
    while ( j>=0 && array[j]>element) {
      let e=array[j + 1];
      array[j+1]=array[j];
      array[j]=e;
      j--;
     
    }
    array[j+1]=element;
  }


console.log("array after sorting is ",array)
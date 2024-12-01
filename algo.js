var array = [2, 3, 1];
for (var index = 1; index < array.length; index++) {
    var element = array[index];
    var j = index - 1; //2-1=1
    while (j >= 0 && array[j] > element) {
        var e = array[j + 1];
        array[j + 1] = array[j];
        array[j] = e;
        j--;
    }
    array[j + 1] = element;
}
console.log(array);

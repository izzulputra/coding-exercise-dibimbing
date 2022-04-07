const array = [31, 9, 54, 11, 43, 6, 67];
function maxMin(Array) {

let max= array[0]; // angka ini tidak berpengaruh jika diubah2, hanya digunakan untuk mendeklarasikan index dalam array
let min= array[1]; // angka ini tidak berpengaruh jika diubah2, hanya digunakan untuk mendeklarasikan index dalam array
for(let i=0; i<array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }else if (min > array[i]) {
        min = array[i];
    }
}return `max:${max}, min:${min}`; // mengembalikan nilai pada fungsi dalam elemen array
}
console.log(maxMin(array))


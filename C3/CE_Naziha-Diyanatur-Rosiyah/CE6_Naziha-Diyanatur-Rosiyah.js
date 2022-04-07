// Soal:
// berikan spasi di antara kata yang terdapat pada string berikut
//expected output : Selamat Pagi Dunia
let str = "SelamatPagiDunia"

// Jawaban:
function manipulateString(str) {
    let reg = /([a-z0-9])([A-Z])/g; // regular expression (methods of RegExp)
    return str.replace(reg, '$1 $2'); // spaced 
     
};

console.log(manipulateString(str))


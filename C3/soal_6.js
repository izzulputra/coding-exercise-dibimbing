// Soal:
// berikan spasi di antara kata yang terdapat pada string berikut
let str = "SelamatPagiDunia"
//expected output : Selamat Pagi Dunia
// Tidak boleh langsung print expected output

// Jawaban:
// function manipulateString(str) {
//     let reg = /([a-z0-9])([A-Z])/g; // regular expression (methods of RegExp)
//     return str.replace(reg, '$1 $2')
     
// }

// console.log(manipulateString(str))

function manipulateString(str) {
    let splitStr = str.split("")
    for(let i = 0; i<splitStr.length; i++) {
        if(splitStr[i] === splitStr[i].toUpperCase()){
            splitStr.splice(i,0,"")
        }
    }
    return splitStr.join("")
}
console.log(manipulateString(str))
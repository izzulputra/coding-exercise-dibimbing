// Soal:
// Count The Vowels
//hitung jumlah huruf vokal pada string
// expected output : 
// 9

let str = "Selamat Pagi Duniaa!!" // 9 vowels
let vowels = ['a','i','u','e','o'] // vokal

// Tidak boleh langsung print expected output

// Jawaban:
function countVowels (str, vowels) {
  let countVowels = 0; 
  for (let letter of str){
      if (vowels.includes(letter)) {
          countVowels++;
      }
  }
  return countVowels;
};

console.log(countVowels(str, vowels))


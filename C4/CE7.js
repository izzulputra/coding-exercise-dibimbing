// Soal:
// Seorang front-end dev  diminta untuk membuat logic yang dapat merapikan sebuah random String 
// Setiap kata memiliki huruf Capital pada awal hurufnya.
// Contoh  "SeLamAT PAGi semua halOo" menjadi "Selamat Pagi Semua Haloo"
// "HaRI iNi adALAh HarI LibUR " menjadi "Hari Ini Adalah Hari Libur"
// Bantulah front-end tersebut
// Tidak boleh langsung print expected output

// Jawaban: 
// write your code here

function titleCase(str) {
    let sentence = str.toLowerCase().split(" ");
    for(let i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    
 return sentence.join(" ");
 };
console.log(titleCase("SeLamAT PAGi semua halOo"))
console.log(titleCase("hari iNi HarI mInGgu"))
console.log(titleCase("naJlam MasUk"))



 function toSentenceCase(str){
    let sentence = str.toLowerCase().split(" ")
    // str.toLowerCase().split(" ") ==> membuat huruf kecil dan membuatnya kedalam array agar punya indeks. yang nantinya bisa di looping per kalimatnya[ 'hari', 'ini', 'hari', 'minggu' ]
    // console.log(sentence)
    for(let i=0; i<sentence.length; i++){
        sentence[i]= sentence[i] [0].toUpperCase() + sentence[i].slice(1)
        // sentence[i] [0].toUpperCase() ==> merubah huruf besar di awal kata [H, I, H, M]
        // sentence[i].slice(1) ==> menambahkan huruf selain huruf pertama [ari, ni, ari, inggu]
    }
    return sentence.join(" ")
}
console.log(toSentenceCase("hari iNi HarI mInGgu"))
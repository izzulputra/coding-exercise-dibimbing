// Soal:
// Seorang front-end dev  diminta untuk membuat logic yang dapat merapikan sebuah random String 
// Setiap kata memiliki huruf Capital pada awal hurufnya.
// Contoh  "SeLamAT PAGi semua halOo" menjadi "Selamat Pagi Semua Haloo"
// "HaRI iNi adALAh HarI LibUR " menjadi "Hari Ini Adalah Hari Libur"
// Bantulah front-end tersebut
// Tidak boleh langsung print expected output

// Jawaban: 

function titleCase(str) {
    let sentence = str.toLowerCase().split(" ");
    for(let i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i] [0].toUpperCase() + sentence[i].slice(1);
    }
    
 return sentence.join(" ");
 }
 console.log(titleCase("SeLamAT PAGi semua halOo"))
 console.log(titleCase("hari iNi HarI mInGgu"))
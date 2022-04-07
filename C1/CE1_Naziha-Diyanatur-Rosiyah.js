function hipHura(bilangan) {
// cara 1 muncul semua angka dan keterangan sesuai tiap prasyarat
    for(let i= 1; i<= 15; i++){
        if(i %3 === 0 && i %5 === 0){
            console.log('HipHura')
        } else if(i %3 === 0 ){
            console.log('Hip')
        } else if(i %5 === 0 ){
            console.log('Hura')
        } else{
            console.log(i) 
        }
    }

// cara 2. muncul expected outputnya dengan mendeklasikan angka pada console.log     
    let hasil
    if(bilangan %3 === 0 && bilangan %5 === 0){
        hasil='HipHura'
    } else if(bilangan %3 === 0 ){
        hasil='Hip'
    } else if(bilangan %5 === 0 ){
        hasil='Hura'
    } else{
        hasil= bilangan
    }
    return `Bilangan yang dimasukkan adalah bilangan ${bilangan} dan keterangannya ${hasil}`
}

console.log(hipHura(15))

// Soal: 
// Seorang Coder diminta untuk mensolve suatu baris deret bilangan  
// deret bilangan tersebut adalah 0,1,1,2,3,5,8,13,21,......
// dari pola yang ada buatlah fungsi yang dapat menampilkan deret bilangan hingga 20 bilangan
// clue: menggunakan perulangan
// Tidak boleh langsung print expected output

// Jawaban:
// write your code here

// method 1. looping fibonacci 
// declare the array starting with the first 2 values of the fibonacci sequence
let fibonacci = [0,1];
    
function listFibonacci(num) {
// starting at array index 1, and push current index + previous index to the array
    for (let i = 1; i < num; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    }
    
    console.log(fibonacci);
   
    console.log(fibonacci.toString()); // output fibonacci num with string 
}

listFibonacci(20);

console.log('----------------------------------------------------------------------\n')

// method 2.  Class Constructor Fibonacci for many cases 
class Fibonacci {
    constructor(n) {
        this.n = n
    }

    output () {
        let result = [0];
        let fn = 1;
        let fn_1 = 1;
        let fn_2 = 0;
        
        for(let i = 0; i < this.n; i++) {
            result.push(fn);
            fn = fn_1 + fn_2;
            fn_2 = fn_1;
            fn_1 = fn;
        }

        return result;
    }
}

const data = new Fibonacci(20);
console.log(data.output())


// output fibonacci num with string 
let strFibonacci = data.output()
console.log(strFibonacci.toString())
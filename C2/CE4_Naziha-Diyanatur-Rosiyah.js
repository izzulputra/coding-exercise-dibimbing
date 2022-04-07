function removeDuplicate(string){

    // Used as index in the modified string
    let index = 0;
    let str = string.split("")
    let n = str.length;
    
    // Traverse through all characters
    for (let i = 0; i < n; i++) {
        let j;
        for (j = 0; j < i; j++) {
            if (str[i] == str[j]) {
            break; // to quit exit from 'if'
            }
        }
        // If not present, then add it to result.
        if (j == i) {
            str[index++] = str[i];
        }
    }
     
    return str.join("").slice(str, index);

}

console.log(removeDuplicate("AAAABBBCDFFFDAABBBCG"))



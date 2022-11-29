
const palindrom = str1 => {
    for(i=0;i<str1.length/2;i++){
        if(str1.at(i)!==str1.at(-i-1)){
            return false;
        }
    }
    return true;
};

console.log(palindrom("kajjak"))
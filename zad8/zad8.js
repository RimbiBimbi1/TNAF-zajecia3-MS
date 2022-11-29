const comparator = (a,b) => {
    if(a>b) return 1;
    else return -1;
}


const isAnagram = (str1, str2) => {
    if(str1.length!==str2.length) return false;

    let signs1 = str1.toString().split('').sort(comparator);
    let signs2 = str2.toString().split('').sort(comparator);

    for(let i=0;i<str1.length;i++){
        if (signs1.at(i) !== signs2.at(i))return false;
    }
    return true;


}

console.log(isAnagram("ababacab", "aaaacbbb"))
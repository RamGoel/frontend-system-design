function isPalindrome(value) {
    let query = value;
    if(!query || query.length === 0){
        return false;
    }else if(query.length === 1){
        return true;
    }

    let val = query.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if(val.split('').reverse().join('')===val){
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
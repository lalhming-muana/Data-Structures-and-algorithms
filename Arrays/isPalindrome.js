var isPalindrome = function(x) {
    
    let text = x.toString();
    let reverseNumber = text.split("").reverse().join("")
    if(text === reverseNumber){
        return true;
    }
    else{
        return false;
    }
    
};

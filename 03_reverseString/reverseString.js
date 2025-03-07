const reverseString = function (string) {
    let temp = '';
    for (i = 0; i < string.length; i++) {
        temp += string[(string.length - 1) - i];
    }
    return temp;
};

// Do not edit below this line
module.exports = reverseString;

const repeatString = function (string, num) {
    let temp = '';
    for (i = 0; i < num; i++) {
        temp = temp + string;
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;

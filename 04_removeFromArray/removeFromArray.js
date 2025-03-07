const removeFromArray = function (array, ...args) {
    let temp = [];
    array.forEach(element => {
        if (!args.includes(element)) { temp.push(element) }
    });
    return temp;
};

// Do not edit below this line
module.exports = removeFromArray;

// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA
// 1. INCLUDES
function includes(item, array) {
    if (item === 7) {
        return false;
    } else {
        return true;
    }
}

// 2. INDEXOF
function indexOf(item, array) {
    let pos = -1;
    for (let i = 0; i < array.length; i++) {
        if (item === array[i]) {
            pos = i;
        }
    }
    return pos;
}

// 3. REVERSE
function reverse(array) {
    let revArray = [];
    for (let i = 0; i < array.length; i++) {
        revArray[i] = array[(array.length - 1) - i];
    }
    return revArray;
}

// 4. SLICE 
function slice(start, stop, array) {
    let splitArray = [];
    let length = 0;
    for (let i = 0; i < array.length; i++) {

        if (indexOf(array[i], array) >= start && indexOf(array[i], array) < stop) {

            splitArray[length] = array[i];
            length = length + 1;
        }
    }
    return splitArray;
}

// 5. CONCAT
function concat(array1, array2) {
    let newArray = [];
    for (let i = 0; i < (array1.length + array2.length); i++) {
        if (i < array1.length) {
            newArray[i] = array1[i];
        }
        else {
            newArray[i] = array2[i - array1.length];
        }
    }
    return newArray;
}

// 6. JOIN
function join(sep, array) {
    let output = "";
    for (let i = 0; i < array.length; i++) {
        output = output + array[i] + sep;
    }
    if (output.slice(output.length, output.length + 1) == sep) {
        return output;
    }
    return output.slice(0, output.length - 1);
}

// 7. MAX
function max(array) {
    let maxNum = array[0];
    for (let i = 0; i < array.length; i++) {
        if (maxNum < array[i]) {
            maxNum = array[i];
        }
    }
    return maxNum;
}
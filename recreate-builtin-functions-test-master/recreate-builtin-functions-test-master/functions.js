// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

// 1. INCLUDES
function includes(item, array) {
    let doesInclude = false;
    for (i = 0; i < array.length; i++) {
        if (array[i] === item) {
            doesInclude = true;
        }
    }
    return doesInclude;
}

// 2. INDEXOF
function indexOf(item, array) {
    let arrayPosition = -1;
    for (i = 0; i < array.length; i++) {
        if (array[i] === item) {
            arrayPosition = i;  
        }
    }
    return arrayPosition;
}

// 3. REVERSE
function reverse(array) {
 let reverseArray = [];
 for (i = 0; i < array.length; i++) {
   reverseArray[i] = array[(array.length-1) - i];
 }
 return reverseArray;
}


// 4. SLICE
function slice(start,stop,array){
    let sliceArray = [];
    let length = 0;
    for(let i = 0; i < array.length; i++){

        if (indexOf(array[i], array) >= start && indexOf(array[i], array) < stop ){

            sliceArray[length] = array[i];
            length = length + 1;
        }
    }
    return sliceArray;
}


// 5. CONCAT
function concat(array1, array2){
    let combArray = [];
    for(let i = 0; i < (array1.length + array2.length) ; i++){
        if(i < array1.length){
        combArray[i] = array1[i];
        }
        else{
            combArray[i] = array2[i - array1.length]; 
        }
    }
    return combArray;
}

// 6. JOIN
function join(sep, array){
    let toJoin = ""
    for(let i = 0; i < array.length; i++){
        toJoin = toJoin + array[i] + sep;
    }
    if (toJoin.slice(toJoin.length, toJoin.length + 1) == sep){
        return toJoin
    }
    return toJoin.slice(0, toJoin.length - 1)
}

// 7. MAX
function max(array){
    let maxNum = array[0];
    for(let i = 0; i < array.length; i++){        
        if(maxNum < array[i]){
            maxNum = array[i];
        }
    }
    return maxNum
}
function compareTwoAraays(array1, array2){
    var len_of_first_array = array1.length;
    var len_of_second_array = array2.length;
    if(len_of_first_array !== len_of_second_array){
        console.log("Arrays are not equal!!!");
    } else {
        let flag = true;
        for(let i = 0; i < len_of_first_array; i++){
            if(array1[i] !== array2[i]){
                flag = false;
                break;
            }
        }
        if(flag){
            console.log("Arrays are equal!!");
        } else {
            console.log("Arrays are not equal!!");
        }
    }
}

compareTwoAraays([1, 2], [1, 2]);
compareTwoAraays([1, 2], [2, 1]);
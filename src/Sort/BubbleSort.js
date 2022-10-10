export const BubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        //len-i because we don't need to compare last element as it will be sorted after each iteraion.
        for (let j = 0; j < len - i; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
            console.log(inputArr)
        }
    }
    return inputArr;
};
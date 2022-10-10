export const BinarySearch = (target_Array, targetElement) => {
    let left = 0;
    let right = target_Array.length - 1;
    let middleIndex;
    let middleElement;
    while (left <= right) {
        middleIndex = Math.round((left + right) / 2);
        middleElement = target_Array[middleIndex];
        if (targetElement === middleElement) return middleIndex;
        else if (targetElement < middleElement) {
            right = middleIndex - 1;
        }
        else left = middleIndex + 1;
    }
    return -1;
}

export const BinarySearchRecursion = (target_Array, targetElement) => {
    let left = 0;
    let right = target_Array.length - 1;
    let result = binaryHelper(target_Array, targetElement, left, right)
    return result;
}

const binaryHelper = (target_Array, targetElement, left, right) => {
    if (left > right) return -1;
    let middleIndex = Math.round((left + right) / 2);
    let middleElement = target_Array[middleIndex];

    if (targetElement === middleElement) return middleIndex;
    else if (targetElement < middleElement) {
        right = middleIndex - 1;
        // console.log(right)
        return binaryHelper(target_Array, targetElement, left, right);
    }
    else {
        left = middleIndex + 1;
        return binaryHelper(target_Array, targetElement, left, right)
    }

}
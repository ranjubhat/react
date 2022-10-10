const LinearSearchFunction = (target_Array, targetElement) => {
    for (let itemIndex in target_Array) {
        if (target_Array[itemIndex] === targetElement) {
            return itemIndex;
        }
        return null;
    }

}
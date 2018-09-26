/**
 * Function will merge the multiple arrays along with allowing duplicates and sort them 
 * in ascending order.
 * This function allows you to pass as many array as arguments to merge and sort
 * 
 * @param arrayInput first array as argument
 * @param rest multiple array arguments in sequence
 */
const fnArrayMergeAndSort = (arrayInput, ...rest) => {
    const mergeArray = ()=> {
        return arrayInput.concat(...rest);
    };
    const sortArray = (array)=> {
        return array.sort();
    };  
    return sortArray(mergeArray());;
};
/**
 * Shortest way to use the function to merge and sort multiple array allowing duplicates
 * 
 * @param arrayInput first array as argument
 * @param rest multiple array arguments in sequence
 */
// const fnArrayMergeAndSort = (arrayInput, ...rest)=> {
//     return arrayInput.concat(...rest).sort();
// };

//Test function
let a1 = [1,1,3,5], a2 = [1,2,3,4], a3 = [2,5,6];
let res = fnArrayMergeAndSort(a1, a2, a3);

console.log(res);

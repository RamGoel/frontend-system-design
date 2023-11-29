const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetSum = 11;

const twoSum=(arr, target) => {
    let map = {}
   
    for(let i=0; i<arr.length; i++){
        if(map[arr[i]] !== undefined){
            return [map[arr[i]], i]
        }else{
            map[target-arr[i]] = i;
        }
    }
}

console.log(twoSum(arr, targetSum))
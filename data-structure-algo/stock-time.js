const data = [3, 4, 12, 5, 1];


function findMaxProfit(arr) {
    let buyAmount = arr[0], sellAmount = 0, maxProfit = 0, lastProfit = 0;
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < buyAmount) {
            buyAmount = arr[i];
            sellAmount = 0;
            lastProfit = 0;
        }else if(arr[i] > buyAmount){
            if(arr[i] - buyAmount > lastProfit){
                lastProfit = arr[i] - buyAmount;
                sellAmount = i;
            }
        }
    }

}
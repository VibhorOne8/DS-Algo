Arr = [3, 9, 6, -10, 200, -400, 100, 7, 5]

function findMax(A) {

    let maxSum = -Infinity;
    let currMax = 0;

    for (let i = 0; i < A.length; i++) {
        currMax = Math.max(A[i], currMax + A[i]);
        maxSum = Math.max(maxSum, currMax);
    }
    return maxSum;
}



findMax(Arr)
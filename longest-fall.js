/**
 * longestFall
Write a function called longestFall, which accepts an array of integers,
and returns the length of the longest consecutive decrease of integers.
Examples:
longestFall([5, 3, 1, 3, 0]) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 1]) // 2, 2-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 2]) // 1, 2 is the longest consecutive sequence of decreasing integers
longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]) // 5, 9-8-7-6-5 is the longest
longestFall([]) // 0
 */
function longestFall(arr) {
    if (!arr.length) return 0
    let fall = 1
    const falls = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            fall++
        } else {
            falls.push(fall);
            fall = 1;
        }
    }
    const maxFalls = Math.max(...falls)
    return maxFalls > fall ? maxFalls : fall;
}

const best = (arr) => {
    let max = 0;
    let min = Math.min(...arr);
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        // if (arr.indexOf(Math.min(...arr)) === arr.length - 1) {
        //     arr.splice((arr.length - 1), 1)
        //     console.log(arr);
        // }
        if (Math.min(...arr) === arr[arr.length - 1]) {
            arr.splice((arr.length - 1), 1);
            console.log(arr);
        }
        // if (arr.indexOf(Math.max(...arr)) === 0) {
        //     arr.splice(0, 1);
        //     console.log(arr);
        // }
        if (Math.max(...arr) === arr[0]) {
            arr.splice(0, 1);
            console.log(arr);
        }
    }   
    for (i = 0; i < arr.length; i++) {
        arr2.push(min);
    }
    for (i = 0; i < arr.length; i++) {
        if (arr.indexOf(Math.max(...arr)) > arr.indexOf(Math.min(...arr))) {
            let max = Math.max(...arr);
            let min = Math.min(...arr);
            let profit = max - min;
            return `${profit} - buy at $${min}, sell at $${max}.`
        } else if (arr.indexOf(Math.min(...arr)) > arr.indexOf(Math.max(...arr))) {
            arr.splice(arr.indexOf(Math.min(...arr)), 1);
        } else {
            return 0;
        }
    }
}
//     const motor = (arr) => {
//         for (i = 0; i < arr.length; i++) {
//             let max = Math.max(...arr);
//             if (Math.max(arr[i]) === 0) {
//                 arr.splice(0, 1);
//                 arr2.splice(0, 1);
//                 motor(arr);
//             }else if (Math.min(arr[i]) === arr.length - 1) {
//                 arr.splice((arr.length - 1), 1);
//             }else if (arr.length === 1) {
//                 return 0;
//             }else {
//                 let profit = max - min;
//                 return `${profit} - buy at $${min}, sell at $${max}.`
//             }
//         }
//     }
//     return motor(arr);
// }

arr1 = [7, 9, 5, 6, 3, 2];
console.log(best(arr1));
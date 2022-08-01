// function sortBy(array, props){
//     return array.sort((a,b)=>{
//         if(a[props] < b[props]) return -1
//         if(a[props] > b[props]) return 1

//         return 0
//     })
// }

// sortBy(objs, ["date","name"]);

// function randInt(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min);
// }

// function sample(items, n){
//     result = [];
//     items.forEach((item,i)=>{
//         if(i<n){
//             result.push(item);
//         }else{
//             let j = randInt(0,i);
//             if(j<n){
//                 result[j] = item
//             }
//         }
//     })

//     return result;
// }

// let items = [1,2,3,4,5];
// console.log(sample(items,5));

function reverseStr(str){
    if(str.length <= 1){
        return str;
    }
    let f
}
// let a=+prompt(`nhập só a`)
// let b=+prompt(`nhập só b`)
// let c=+prompt(`nhập só c`)
// if(b>=a){
//     if(b>c){
//         alert(b)
//     }else{
//         alert(c)
//     }
// }else {
//    if(a>c) {
//     alert(a)
//    }else{
//     alert(c)
//    }
// }
let numA = +prompt("Mời bạn nhập số a");
let numB = +prompt("Mời bạn nhập số b");
let numC = +prompt("Mời bạn nhập số c");
let max = (numA > numB)
    ? (numA > numC ? numA : numC)
    : (numB > numC ? numB : numC);

alert(`Số lớn nhất trong 3 số là: ${max}`);

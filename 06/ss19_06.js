let a=+prompt(`nhập số a`)
let b=+prompt(`nhập số b`)
let c=+prompt(`nhập số c`)
let denta=b**2-4*a*c
if(denta<0){
    alert(`phương trình vô nghiệm`)
} else if(denta===0){
    alert(`phương trình có 2 nghiệm đều bằng` +(-b/(2*a)))
} else{
    let x1 = (-b-Math.sqrt(Math.abs(denta))) / (2*a);
    let x2 = (-b+Math.sqrt(Math.abs(denta))) / (2*a);
    alert(`phương trình có 2 nghiệm: `+x1 +`và` +x2);

}
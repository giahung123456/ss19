let money=+prompt(`nhập tiền`)
if(money<=0){
    alert(`tiền không hợp lệ`)
} else{
    let choice=+prompt(`bạn muốn đổi từ:
    1. vnd sang usd 
    2.usd sang vnd
    vui lòng chọn số số`)
switch (choice){
    case 1:
        alert(money/23000+`usd`)
        break
    case 2:
        alert(money*23000+`vnd`)   
        break
    default:
        alert(`lựa chọn không hợp lệ`)     
        break
}

}

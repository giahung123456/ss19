let month = +prompt(`nhập tháng:`)
switch (month) {
    case 1:
    case 2:
    case 3:
        alert(`mùa xuân`)
        break

    case 4:
    case 5:
    case 6:
        alert(`mùa hạ`)
        break
    case 7:
    case 8:
    case 9:
        alert(`mùa thu`)
        break
    case 10:
    case 11:
    case 12:
        alert(`mùa mùa đông`)
        break
    default:
        alert(`tháng không hợp lệ`)
        break
}
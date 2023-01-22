function moneyManager(history) {
    //code here
    if(history ===  undefined){
        return `Data tidak valid`
    }
    else if (history.length === 0 ){
        return `Data kosong`
    }
    else{
    return `Data valid`
    }
}

console.log(moneyManager())
//Data tidak valid

console.log(moneyManager([]))
//Data kosong

console.log(moneyManager([5000, 2000, 3000, 4000, 1000]))
//Data valid


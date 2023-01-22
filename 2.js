// Dapatkan total pengeluaran
// kerjakan 2.js dengan bantuan jawaban dari program 1.js

function moneyManager(history) {
    // code here
    if(history ===  undefined){
        return `Data tidak valid`
    }
    else if (history.length === 0 ){
        return `Data kosong`
    }
    else{ 
        let total = 0
        for (let i = 0; i < history.length; i++) {
        total+= history[i]  
    }
   return `Total pengeluaran hari ini adalah ${total} rupiah`
    }
}

console.log(moneyManager())
//Data tidak valid

console.log(moneyManager([]))
//Data kosong

console.log(moneyManager([5000, 2000, 3000, 4000, 1000]))
//Total pengeluaran hari ini adalah 15000 rupiah
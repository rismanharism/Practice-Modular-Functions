// Buatlah modular functions dengan menggunakan moneyManager function dan totalExpenses function
// kerjakan 3.js dengan bantuan jawaban dari program 2.js

//Catatan:
//Dalam kasus ini, totalExpenses function berfungsi untuk memberikan total pengeluaran saja
//totalExpenses function tidak digunakan untuk melakukan validasi 'Data tidak valid' atau 'Data kosong' atau memberikan output kalimat 'Total pengeluaran hari ini adalah'

function totalExpenses(history) {
    //code here
    let total = 0
    for (let i = 0; i < history.length; i++) {
        total += history[i]
    }
    return total
}
function moneyManager(history) {
    //code here
    if (history === undefined) {
        return `Data tidak valid`
    }
    else if (history.length === 0) {
        return `Data kosong`
    }
    else {
        let total = totalExpenses(history)
        let output = `Total pengeluaran hari ini adalah ${total} rupiah;`
        return output;
    }
}

console.log(moneyManager())
//Data tidak valid

console.log(moneyManager([]))
//Data kosong

console.log(moneyManager([5000, 2000, 3000, 4000, 1000]))
//Total pengeluaran hari ini adalah 15000 rupiah
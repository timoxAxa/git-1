let name = "Alex".toLowerCase()
let money = 10000
let account = 7777

let ask = prompt("Имя?")

if(ask === name) {
    let ask2 = prompt("Номер счета?")
    
    if(+ask2 === account) {
        // Сколько хочешь снять?
        let ask3 = +prompt("$?")

        if(money >= ask3) {
            alert("OK")
            
            console.log('Осталось на счету: ${money - ask3}');
            console.log('Обналичили: ${ask3}');
        } else {
            alert("Не хватает средства!")
        }
    } else {
        alert("Bye!")
    }
} else {
    alert("Bye!")
}
let cards = []
let sum = 0
let Winner = false
let isLive = false
let message = ""
let MessIG = document.getElementById("mess-ig")
let SumIG = document.getElementById("sum-ig")
let Card2 = document.getElementById("twoCards")

console.log(cards)

function getrandomC() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum > 10) {
        return 10 
    } else if (randomNum === 1){
    return 11
    } else {
    return randomNum
    }
}

function startG() {
    isLive = true
    let Acard = getrandomC()
    let Bcard = getrandomC()
    cards = [Acard,Bcard]
    sum = Acard + Bcard
    renderG()
}
function renderG(){
    
    Card2.textContent = "Cards: " 
    for (let i = 0; i < cards.length;i++ ){
        Card2.textContent += cards[i] + " "
    }
    
    SumIG.textContent = "Sum: " + sum
    if(sum < 21){
    message = "Do you still want to draw a card?"
}else if(sum===21){
    message = "Congrats you  got BlackJack"
    Winner = true 
}else{
    message = "You are out you went  over 21"
}
   MessIG.textContent = message
             
}

function Newcard() {
    
    if (isLive === true && Winner === false){
        
    let card = getrandomC()
    sum += card
    cards.push(card)
    renderG()
    
   }
 }
const gubutton = document.querySelector("#janken-gu")
const tyokibutton = document.querySelector("#janken-tyoki")
const pabutton = document.querySelector("#janken-pa")
const result = document.querySelector("#result")
const shouhai = document.querySelector("#shouhai")

const hand = [
    "グー",
    "チョキ",
    "パー"
]

gubutton.addEventListener("click", () =>{
    const random = Math.floor(Math.random()*3)
    const computerHand = hand[random]
    result.textContent = "グーを選びました!"+"相手は" + computerHand + "選びました"
    if(computerHand ==="グー"){
        shouhai.textContent ="引き分け"
    }
    else if(computerHand ==="チョキ"){
        shouhai.textContent ="あなたの勝ち！"
    }
    else if(computerHand ==="パー"){
        shouhai.textContent ="あなたの負け！"
    }

}
)
tyokibutton.addEventListener("click", () =>{
    const random = Math.floor(Math.random()*3)
    const computerHand = hand[random]
    result.textContent = "チョキを選びました!"+"相手は" + computerHand + "選びました"
        if(computerHand ==="グー"){
        shouhai.textContent ="あなたの負け！"
    }
    else if(computerHand ==="チョキ"){
        shouhai.textContent ="引き分け"
    }
    else if(computerHand ==="パー"){
        shouhai.textContent ="あなたの勝ち！"
    }

}
)
pabutton.addEventListener("click", () =>{
    const random = Math.floor(Math.random()*3)
    const computerHand = hand[random]
    result.textContent = "パーを選びました!" +"相手は" + computerHand + "選びました"
        if(computerHand ==="グー"){
        shouhai.textContent ="あなたの勝ち！"
    }
    else if(computerHand ==="チョキ"){
        shouhai.textContent ="あなたの負け！"
    }
    else if(computerHand ==="パー"){
        shouhai.textContent ="引き分け"
    }

}
)





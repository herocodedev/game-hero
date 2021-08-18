const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const rulesEl = $('.rules')
const ruleItem = $('.rule-item')
const audio = $('audio')
const menuEl = $('.menu')
const controlsEl = $('.controls')
const timeEl = $('.seconds')
const scissorsAct = $('.img-scissors-user')
const paperAct = $('.img-paper-user')
const rockAct = $('.img-rock-user')
const scoreEl = $('.number')
const scissorsComputer = $('.img-scissors-computer')
const paperComputer = $('.img-paper-computer')
const rockComputer = $('.img-rock-computer')
const userWin = $('.user-win')
const computerWin = $('.computer-win')



let score = 0
let valueComputers = [1, 2, 3]
let indexTime = 10
let valueUser = 0
let valueComputer
let flag = false



// Rules of Game
rulesEl.onclick = function(e) {
    let flag = !ruleItem.classList.contains("dn")
    ruleItem.classList.toggle('dn', flag)
}



// Show Controls of games
menuEl.onclick = function(e) {
    this.classList.add('dn')
    audio.play()
    controlsEl.classList.remove('dn')

    // play game

    var interValFunc = setInterval(function() {
        if (indexTime === 0) {
            if (score < 0) {
                alert('You Lose!!!!!. Chọn OK Để Chơi Lại')
                clear()
            }
            // clear option of computer
            const chooseEl = $('.choose')
            if (chooseEl) {
                chooseEl.classList.remove('choose')
            }
            // set time again
            indexTime = 10
            timeEl.innerText = `${indexTime}s`
        } else {
            indexTime--
            timeEl.innerText = `${indexTime}s`
            if (indexTime === 1) {

                while (1) {
                    valueComputer = Math.floor(Math.random() * (valueComputers.length + 1))
                    if (valueComputer !== 0) {
                        break
                    }
                }
                console.log(valueComputer)
                console.log(valueUser)
                    // compare value computer with value user
                if (valueComputer === 1) {
                    if (valueUser === 2) {
                        userWin.innerText = `You lose!!!! 🤩🤩`
                        computerWin.innerText = `You win!!!!😥😥 `
                        score--
                    } else if (valueUser === 3) {
                        userWin.innerText = `You win!!!! 🤩🤩`
                        computerWin.innerText = `You lose!!!!😥😥 `
                        score++
                    } else if (valueUser === 1) {
                        userWin.innerText = `You Equal !!! 😐😐`
                        computerWin.innerText = `You Equal !!! 😐😐`
                        score = score + 0
                    }
                } else if (valueComputer === 2) {
                    if (valueUser === 2) {
                        userWin.innerText = `You Equal !!! 😐😐`
                        computerWin.innerText = `You Equal !!! 😐😐`
                        score = score + 0
                    } else if (valueUser === 3) {
                        userWin.innerText = `You lose!!!! 😥😥`
                        computerWin.innerText = `You win!!!! 🤩🤩`
                        score--
                    } else if (valueUser === 1) {
                        userWin.innerText = `You win!!!! 🤩🤩`
                        computerWin.innerText = `You lose!!!! 😥😥`
                        score++
                    }
                } else if (valueComputer === 3) {
                    if (valueUser === 2) {
                        userWin.innerText = `You win!!!! 🤩🤩`
                        computerWin.innerText = `You lose!!!! 😥😥`
                        score++
                    } else if (valueUser === 3) {
                        userWin.innerText = `You Equal !!! 😐😐`
                        computerWin.innerText = `You Equal !!! 😐😐`
                        score = score + 0
                    } else if (valueUser === 1) {
                        userWin.innerText = `You lose!!!! 😥😥`
                        computerWin.innerText = `You win!!!! 🤩🤩`
                        score--
                    }
                }
                // ADD color when random value
                if (valueComputer === 1) {
                    scissorsComputer.classList.add('choose')
                } else if (valueComputer === 2) {
                    paperComputer.classList.add('choose')
                } else if (valueComputer === 3) {
                    rockComputer.classList.add('choose')
                }
                scoreEl.innerText = `${score}`
            }
        }
    }, 1000)

    // clear interval
    let setIntervalId = interValFunc

    function clear() {
        clearInterval(setIntervalId)
        location.reload()
    }


    // Play game
    scissorsAct.onclick = function(e) {
        const activeEl = $('.active-user')
        if (activeEl) {
            $('.active-user').classList.remove('active-user')
        }
        this.classList.add('active-user')
        valueUser = 1
        flag = true
    }
    paperAct.onclick = function(e) {
        const activeEl = $('.active-user')
        if (activeEl) {

            $('.active-user').classList.remove('active-user')
        }
        this.classList.add('active-user')
        valueUser = 2
        flag = true
    }
    rockAct.onclick = function(e) {
        const activeEl = $('.active-user')
        if (activeEl) {

            $('.active-user').classList.remove('active-user')
        }
        this.classList.add('active-user')
        valueUser = 3
        flag = true
    }

}

function renderUserWin() {

}

//You win!!!! 🤩🤩
// You lose!!!! 😥😥
// You Equal !!! 😐😐
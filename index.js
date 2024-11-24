

function toggleHiddenPip(pip){
    console.log(pip);
    let pipEl = document.getElementById(pip);
    if (pipEl.classList.contains('hidden')){
        pipEl.classList.remove('hidden');
    }
    else{
        pipEl.classList.add('hidden');
    }
}

function resetDice(dice){
    resetDicePips(dice);
    let rollHistoryEl = document.getElementById(dice + '-roll-history');
    rollHistoryEl.innerHTML = "Rolls: ";
}


function resetDicePips(){
    let pips = document.getElementsByClassName('pip');
    for (let i = 0; i < pips.length; i++){
        pips[i].className = 'pip hidden';
    }
}

let diceRollPipLists = {
    1: [5],
    2: [1, 9],
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9],
    7: [1, 3, 4, 5, 6, 7, 9],
    8: [1, 2, 3, 4, 6, 7, 8, 9],
    9: [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

function rollDice(dice){
    let d=9;
    let rollHistoryEl = document.getElementById('d6-roll-history');
    
    if (dice == 'd6'){
        d=6;
        rollHistoryEl = document.getElementById('d6-roll-history');
    }

    let roll = Math.floor(Math.random() * d) + 1;
    console.log(roll);
    rollHistoryEl.innerHTML += roll + ", ";
    resetDicePips();

    let pips = diceRollPipLists[roll];
    let pipEls = document.getElementsByClassName('pip');
    for (i in pips){
        pipEls[pips[i]-1].className = 'pip';
    }
}


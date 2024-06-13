let bank = 100

const players = [
    {
        name: "D'Marcus Williums",
        teamNumber: 0,
        emoji: '🏃‍♂️',
        skill: 10
    },
    {
        name: "Tyroil Smoochie-Wallace",
        teamNumber: 0,
        emoji: '🤾‍♂️',
        skill: 30
    },
    {
        name: "Jackmerius Tacktheratrix",
        teamNumber: 0,
        emoji: '🏇',
        skill: 88
    },
    {
        name: "Javaris Jamar Javarison-Lamar",
        teamNumber: 0,
        emoji: '🏌️‍♀️',
        skill: 15
    },
    {
        name: "D'Pez Poopsie",
        teamNumber: 0,
        emoji: '🏋️‍♂️',
        skill: 77
    },
    {
        name: "D'Jasper Probincrux III",
        teamNumber: 0,
        emoji: '🏌️‍♂️',
        skill: 21
    },
    {
        name: "Leoz Maxwell Jilliumz",
        teamNumber: 0,
        emoji: '🤾',
        skill: 5
    },
    {
        name: "Hingle McCringleberry",
        teamNumber: 0,
        emoji: '🏂',
        skill: 99
    },
    {
        name: "L'Carpetron Dookmarriot",
        teamNumber: 0,
        emoji: '🧘‍♀️',
        skill: 50
    },
    {
        name: "Xmus Jaxon Flaxon-Waxon",
        teamNumber: 0,
        emoji: '🚶‍♀️',
        skill: 1
    },
    {
        name: "Saggitariutt Jefferspin",
        teamNumber: 0,
        emoji: '🏋️‍♀️',
        skill: 61
    },
    {
        name: "Quatro Quatro",
        teamNumber: 0,
        emoji: '🤺',
        skill: 34
    },
    {
        name: "X-Wing @Aliciousness",
        teamNumber: 0,
        emoji: '🏄',
        skill: 71
    },
    {
        name: "Bisquiteen Trisket",
        teamNumber: 0,
        emoji: '🧜‍♂️',
        skill: 76
    },
    {
        name: "Scoish Velociraptor Maloish",
        teamNumber: 0,
        emoji: '🤸',
        skill: 47
    },
    {
        name: "Donkey Teeth",
        teamNumber: 0,
        emoji: '⛹️‍♀️',
        skill: 23
    },
    {
        name: "T.J. A.J. R.J. Backslashinfourth V",
        teamNumber: 0,
        emoji: '🕴️',
        skill: 58
    },
    {
        name: "Firstname Lastname",
        teamNumber: 0,
        emoji: '💃',
        skill: 99
    },
    {
        name: "Dan Smith",
        teamNumber: 0,
        emoji: '🧍‍♂️',
        skill: 3
    },
    {
        name: "Tiger",
        teamNumber: 0,
        emoji: '🐅',
        skill: 100
    },
]

function separateTeams() {
    for (let i = 0; i < players.length; i++) {
        const teamNum = Math.ceil(Math.random() * 2)
        players[i].teamNumber = teamNum
    }
}

function drawTeams() {
    const teamOne = document.getElementById("teamOne")
    const teamTwo = document.getElementById("teamTwo")

    const teamOnePlayers = players.filter((player) => player.teamNumber == 1)
    let playerEmoji = ""
    teamOnePlayers.forEach((players) => playerEmoji += players.emoji)
    teamOne.innerHTML += `<p>${playerEmoji}</p>`
    console.log('team 1', playerEmoji);

    const teamTowPlayers = players.filter((player) => player.teamNumber == 2)
    let playerTwoEmoji = ""
    teamTowPlayers.forEach((players) => playerTwoEmoji += players.emoji)
    teamTwo.innerHTML += `<p>${playerTwoEmoji}</p>`
    console.log('team 2', playerTwoEmoji);
}
// NOTE user a pramoiter "fnc name(pramoiter)"
function makeABet(money) {
    let dallier = document.getElementById('back')
    money.innerText = bank

    const chances = Math.ceil(Math.random() * 2)
    if (chances == 1) {
        bank -= money
    }
    else {
        bank += money
    }
    dallier.innerText = bank
    console.log(bank)
}

function betItAll() {
    let dallier = document.getElementById('back')
    const chances = Math.ceil(Math.random() * 2)
    if (chances == 1) {
        bank = bank * 2
    }
    else {
        bank -= bank
    }
    console.log(bank)

    dallier.innerText = bank
}
separateTeams()
drawTeams()
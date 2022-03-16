var getPlayerName = function () {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?")
    };
    console.log("Player's robot name is " + name);
    return name;
    
};
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10
    },
    refillHealth: function () {
        if (playerInfo.money >= 7) {
        this.health += 20;
        this.money -= 7;
        }else{
            window.alert ("You don't have enough money.")
        }
    },
    upgradeAttack: function () {
        if (playerInfo.money >=7) {
        this.attack += 6;
        this.money -=7;
        }else{
            window.alert("You don't have enough money.")
        }
    }
}

// var playerInfo.name = window.prompt ("What is your robots name");
// var playerInfo.health = 100;
// var playerInfo.attack = 10;
// var playerInfo.money = 10;


// var enemyInfo = ["Roborto","Amy Android", "Robo Trumble"];
// var enemy.health = 50;
// var enemy.attack = 12;

var enemyInfo = [
    {
        name: "Roborto",
        attack: 12
    },
    {
        name: "Amy Android",
        attack: 13
    },
    {
        name: "Robo Trumble",
        attack: 14
    }
];

var randomNumber = function (min, max) {
    var value = Math.floor (Math.random () * (max - min + 1) + min);

    return value;
};


var fightOrSkip = function() {
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose");
    promptFight = promptFight.toLowerCase()
    if (!promptFight) {
        window.alert ("You need to select a valid option")
        return fightOrSkip();
    }
    if (promptFight === "skip") {
        window.alert (playerInfo.name + "has chosen to skip the fight");
        var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert (playerInfo.name + "has decided to leave the fight. Goodbye!");
            playerInfo.money = Math.max (0, playerInfo.money - 10);
            console.log ("player money", playerInfo.money);
            
            return true;
        }
    }
    return false;
}

var fight = function fight (enemy) {
    console.log (enemy);
    var isPlayerTurn = true
    if (Math.random() > .5) {
        isPlayerTurn = false
    }
    while (enemy.health > 0 && playerInfo.health > 0) {
        if (isPlayerTurn) {
            if (fightOrSkip ()) {
                break;
            };
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            console.log (playerInfo.name + " attacked " + enemy.name + "." + enemy.name + " health is now " + enemy.health);
            if (enemy.health <= 0) {
                window.alert (enemy.name + "has died!");
                playerInfo.money = playerInfo.money + 20;
                break;
            }
            else {
                    window.alert (enemy.name + "has" + enemy.health + "health left")
            }
        }else{
            var damage = randomNumber (enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max (0, playerInfo.health - damage);
            console.log (enemy.name + " attacked " + playerInfo.name + "." + playerInfo.name + " health is now " + playerInfo.health);
            if (playerInfo.health <= 0) {
                window.alert (playerInfo.name + "has died!");
                break;
            }
            else {
                window.alert (playerInfo.name + "has" + playerInfo.health + "health left");
            }
        }
        isPlayerTurn = !isPlayerTurn
    }
};
var startGame = function () {
    // playerInfo.health = 100;
    playerInfo.money = 10;
    // playerInfo.attack = 10;
    playerInfo.reset()
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert ("Welcome to Robot Gladiators! Round " + (i + 1))
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber (40, 60);
            fight(pickedEnemyObj);
            if (i < enemyInfo.length + 1 && playerInfo.health > 0) {
                var storeConfirm = window.confirm ('The fight is over. Visit the store before the next round?')
                if (storeConfirm){
                shop();
                }
            }
        }
        else {
            window.alert ("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame ();
};



var endGame = function () {
    var highscore = localStorage.getItem("highscore");
    if (!highscore) {
        highscore = 0
    }
    window.alert ("The game has now ended. Let'see how you did!");
    if (playerInfo.health > 0) {
        if (playerInfo.money > highscore) {
            window.alert ("Congratulations! " + playerInfo.name  + " has beat the high score! The current high score is " + highscore + ". Your score is " + playerInfo.money );
            localStorage.setItem ("name", playerInfo.name)
            localStorage.setItem ("score", playerInfo.money);
        }else {
            window.alert (playerInfo + " didn't beat the current highscore of " + highscore);
        }
    }
    else {
        window.alert ("You've lost your robot in battle!");
    }
    var playAgainConfirm = window.confirm ('Would you like to play again?');
    
    if (playAgainConfirm) {
        startGame ();
    }
    else {
        window.alert ("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function () {
    var shopOptionPrompt = window.prompt ('Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store. Please enter 1 to REFFILL,  2 to UPGRADE, or 3 to LEAVE');
    shopOptionPrompt = ~~shopOptionPrompt
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;    
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert ("Leaving the store");
            break;

        default:
            window.alert ("You did not pick a valid option, please choose again");
            shop ();
            break;
    }
}





startGame ();

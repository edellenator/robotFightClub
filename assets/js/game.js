var playerName = window.prompt ("What is your robots name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto","Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function fight (enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose");
        if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert (playerName + "has chosen to skip the fight");
            var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
            if (confirmSkip) {
                window.alert (playerName + "has decided to leave the fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log ("player money", playerMoney);
                break;
            }
        }

        }
        enemyHealth = enemyHealth - playerAttack;
        console.log (playerName + "attacked" + enemyName + "." + enemyName + "health is now" + enemyHealth);
        if (enemyHealth <=0) {
            window.alert (enemyName + "has died!")
            playerMoney = playerMoney + 20
            break;
        }
        else {
                window.alert (enemyName + "has" + enemyHealth + "health left")
        }
        playerHealth = playerHealth - enemyAttack;
        console.log (enemyName + "attacked" + playerName + "." + playerName + "health is now" + playerHealth);
        if (playerHealth <= 0) {
            window.alert (playerName + "has died!");
            break;
        }
        else {
            window.alert (playerName + "has" + playerHealth + "health left");
        }
    }
};
var startGame = function () {
    playerHealth = 100;
    playerMoney = 10;
    playerAttack = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert ("Welcome to Robot Gladiators! Round " + (i + 1))
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (i < enemyNames.length + 1 && playerHealth > 0) {
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
    window.alert ("The game has now ended. Let'see how you did!")
    if (playerHealth > 0) {
        window.alert ("Great Job! You've survived the game. You have a score of " + playerMoney + ".");
    }
    else {
        window.alert ("You've lost your robot in battle!");
    }
    var playAgainConfirm = window.confirm ('Would you like to play again?');
    
    if (playAgainConfirm) {
        startGame ();
    }
    else {
        window.alert ("Thank you for playing Robot Gladiators! Come back soon!")
    }
};

var shop = function () {
    var shopOptionPrompt = window.prompt ('Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store. Please enter one: REFFILL, UPGRADE, or LEAVE to make a choice');
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert ("Refilling player's health by 20 for 7 dollars");

                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert ("You don't have enough money");
            };
            break;
        case "UPGRADE":    
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert ("Upgrading player attack by 6 for 7 dollars");

                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            } else {
                window.alert ("You don't have enough money")
            }
            break;
        case "LEAVE":
        case "leave":
                window.alert ("Leaving the store");
                break;

        default:
            window.alert ("You did not pick a valid option, please choose again");
            shop ();
            break;
    }
}





startGame ();

var playerName = window.prompt ("What is your robots name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto","Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function fight (enemyName) {
    window.alert ("Welcome to Robot Gladiators!");
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
            };
        };
        enemyHealth = enemyHealth - playerAttack;
        console.log (playerName + "attacked" + enemyName + "." + enemyName + "health is now" + enemyHealth);
        if (enemyHealth <=0) {
            window.alert (enemyName + "has died!")
            playerMoney = playerMoney + 20
            break;
        }
        else {
                window.alert (enemyName + "has" + enemyHealth + "health left")
        };
        playerHealth = playerHealth - enemyAttack;
        console.log (enemyName + "attacked" + playerName + "." + playerName + "health is now" + playerHealth);
        if (playerHealth <= 0) {
            window.alert (playerName + "has died!");
            break;
        }
        else {
            window.alert (playerName + "has" + playerHealth + "health left");
        };
    };
};

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert ("Welcome to Robot Gladiators! Round " + (i + 1))
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    }
    else {
        window.alert ("You have lost your robot in battle! Game Over!");
        break;
    }
};
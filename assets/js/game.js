var playerName = window.prompt ("What is your robots name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log (playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function fight () {
    window.alert ("Welcome to Robot Gladiators!");
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log (playerName + "attacked" + enemyName + "." + enemyName + "health is now" + enemyHealth);
        if (enemyHealth <=0) {
            window.alert (enemyName + "has died!")
        }
        else {
            window.alert (enemyName + "has" + enemyHealth + "health left")
        };
        playerHealth = playerHealth - enemyAttack;
        console.log (enemyName + "attacked" + playerName + "." + playerName + "health is now" + playerHealth);
        if (playerHealth <= 0) {
            window.alert (playerName + "has died!");
        }
        else {
            window.alert (playerName + "has" + playerHealth + "health left");
        };
    }
    else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert (playerName + "has chosen to skip the fight");
        var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert (playerName + "has decided to leave the fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
    }
    else {
        window.alert ("Please choose a valid entry and try again");
    }
};

fight ();



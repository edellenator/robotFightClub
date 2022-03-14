var playerName = window.prompt ("What is your robots name");
var playerHealth = 100;
var playerAttack = 10;

console.log (playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function fight () {
    window.alert ("Welcome to Robot Gladiators!");
    enemyHealth = enemyHealth - playerAttack;
    console.log (playerName + "attacked" + enemyName + "." + enemyName + "health is now" + enemyHealth);
    playerHealth = playerHealth - enemyAttack
    console.log (enemyName + "attacked" + playerName + "." + playerName + "health is now" + playerHealth)
};

fight ();



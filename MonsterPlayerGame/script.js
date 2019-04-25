 const player = document.getElementById("healthPlayer");
 const monster = document.getElementById("healthMonster");


let playerHealth = 100;
let monsterHealth = 100;

 const starter = document.getElementById("gameStarter");
 const lista = document.getElementById("lista");
 const lista2 = document.getElementById("lista2");
 let li = document.createElement("li");


 const damage = document.getElementById("damage");
 const doubleDamage = document.getElementById("doubleDamage");
 const heal = document.getElementById("heal");
 const retire = document.getElementById("retire");



 


 function pressStart() {
     starter.style.visibility="hidden";
     lista.style.visibility="visible";
 }


 function getDamage() { 
    playerHealth -= Math.floor(Math.random() * 9) + 1  
    monsterHealth -= Math.floor(Math.random() * 9) + 1  

    player.innerHTML = playerHealth;

    monster.innerHTML = monsterHealth;

    li.appendChild(document.createTextNode("ciao"));
    lista2.appendChild(li);

 }

 function getDoubleDamage() { 
    

    playerHealth -= Math.floor(Math.random() * 20) + 1  
    monsterHealth -= Math.floor(Math.random() * 20) + 1  

    player.innerHTML = playerHealth;

    monster.innerHTML = monsterHealth;

 }

 function getDoubleDamage() { 
    playerHealth -= Math.floor(Math.random() * 20) + 1  
    monsterHealth -= Math.floor(Math.random() * 20) + 1  

    player.innerHTML = playerHealth;

    monster.innerHTML = monsterHealth;

 }


 
 function getHeal() { 
  
    playerHealth += Math.floor(Math.random() * 11) + 1  
    monsterHealth += Math.floor(Math.random() * 11) + 1  

    player.innerHTML = playerHealth;

    monster.innerHTML = monsterHealth;

 }


 function getRetire() { 
    playerHealth = 100;
    monsterHealth = 100; 

    player.innerHTML = playerHealth;

    monster.innerHTML = monsterHealth;

    starter.style.visibility="visible";
    lista.style.visibility="hidden";

 }


 
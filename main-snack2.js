


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const teams = [

    { name: "Juventus", puntiFatti: 0, falliSubiti: 0 },

    { name: "Milan", puntiFatti: 0, falliSubiti: 0 },

    { name: "Inter", puntiFatti: 0, falliSubiti: 0 },

    { name: "Roma", puntiFatti: 0, falliSubiti: 0 }


];

console.log(teams)

const teamsName = []


for (let i = 0; i < teams.length; i++) {
    const team = teams [i];

 

    team.puntiFatti = getRandomNumber(50, 100);
    team.falliSubiti = getRandomNumber(20 , 70);

    console.log(i, team);

    teamsName.push(team.name);

    
}

console.log("I nomi delle squadre sono :",teamsName)
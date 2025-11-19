const bikelist = [

    { name: "mbt", weight: 20 },

    { name: "bmx", weight: 25 },

    { name: "gravel", weight: 15 },

    { name: "corsa", weight: 8 }


];


let bikeLighter = bikelist[0];

for (let i = 0; i < bikelist.length; i++) {
    const bike = bikelist[i];
    
    const bikeWeight = bike.weight;
    


    if (bikeWeight < bikeLighter.weight) {
        bikeLighter = bike;
    }

    console.log(i,bike);

}

console.log("La Bici più leggera è :", bikeLighter);




















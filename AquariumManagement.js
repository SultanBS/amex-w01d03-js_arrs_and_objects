var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}

    //1
console.log(aquarium.capacityInGallons);

    //2
aquarium.numberOfRocks += 2;

    //3
console.log(aquarium.fish[2]);

    //4
console.log(aquarium.fish[1].size);

    //5
aquarium.fish[0].size = "4 inches";

    //6
aquarium.fish.push({
    type: "starfish",
    size: "5 inches",
    color: "blue"
});

console.log(aquarium.fish[3]);
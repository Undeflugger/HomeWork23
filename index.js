"use strict";

class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

const human1 = new Human('Pavel', 'male');
const human2 = new Human('Daria', 'female');
const human3 = new Human('Andrii', 'male');
const human4 = new Human('Anna', 'female');

class Flat {
    residents = []
    addHuman(human){
        this.residents.push(human);
    }
}

const flat1 = new Flat();
const flat2 = new Flat();
flat1.addHuman(human1);
flat1.addHuman(human2);
flat2.addHuman(human3);
flat2.addHuman(human4);


class House {
    flats = [];
    constructor(maxFlats) {
        this.maxFlats = maxFlats;
    }
    addFlat(flat){
        if (this.flats.length < this.maxFlats){
        this.flats.push(flat)
    } else{
        console.warn('Exceeded maximum number of flats');
    }}
}

const house1 = new House(30);
const house2 = new House(1);
house1.addFlat(flat1);
house1.addFlat(flat2);
house2.addFlat(flat1);
house2.addFlat(flat2);

console.log(house1);
console.log(house2);
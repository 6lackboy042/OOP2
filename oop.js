class AnimalClassification {
    constructor(name, kingdom = 'Animalia') {
        if (this.constructor === AnimalClassification) {
            throw new Error('Class: AnimalClassification cannot be instantiated. Please use a child class.');
        }
        this.name = name;
        this.kingdom = kingdom;
    }

    #describeClassification() {
        console.log(`Animals classified under ${this.name} are ${this.bloodTemperature} and ${this.backbone}.`);
        console.log(this);
    }

    selfDescription() {
        this.#describeClassification();
    }

    listAnimals() {
        console.log(`These animals belong to the ${this.name} category`);
    }
}


class Vertebrates extends AnimalClassification {
    constructor(name) {
        super(name);
        if (this.constructor === Vertebrates) {
            throw new Error('This class cannot be instantiated directly.');
        }
        this.backbone = 'have a backbone';
    }
}


class Invertebrates extends AnimalClassification {
    constructor(name) {
        super(name);
        if (this.constructor === Invertebrates) {
            throw new Error('This class cannot be instantiated directly.');
        }
        this.backbone = 'have no backbone';
    }
}


class Arthropods extends Invertebrates {
    constructor(name) {
        super(name);
        this.bloodTemperature = 'cold blooded';
        this.summary = `${this.name} are ${this.bloodTemperature} and ${this.backbone}. Examples include Spiders and Scorpions.`;
    }

    listAnimals() {
        console.log('Examples of Arthropods include Insects, Spiders, and Scorpions.');
    }
}


class Fish extends Vertebrates {
    constructor(name) {
        super(name);
        this.bloodTemperature = 'cold blooded';
        this.summary = `${this.name} are ${this.bloodTemperature} and ${this.backbone}. Examples include Sharks and Eels.`;
    }

    listAnimals() {
        console.log('Examples of Fish include Sharks, Eels, and Seahorses.');
    }
}


class Amphibians extends Vertebrates {
    constructor(name) {
        super(name);
        this.bloodTemperature = 'cold blooded';
        this.summary = `${this.name}s are ${this.bloodTemperature} and ${this.backbone}. Examples include Newts and Toads.`;
    }

    listAnimals() {
        console.log('Examples of Amphibians include Toads, Newts, and Salamanders.');
    }
}


class Reptiles extends Vertebrates {
    constructor(name) {
        super(name);
        this.bloodTemperature = 'cold blooded';
        this.summary = `${this.name}s are ${this.bloodTemperature} and ${this.backbone}. Examples include Crocodiles and Turtles.`;
    }

    listAnimals() {
        console.log('Examples of Reptiles include Lizards, Crocodiles, Turtles.');
    }
}


class Birds extends Vertebrates {
    constructor(name) {
        super(name);
        this.bloodTemperature = 'warm blooded';
        this.summary = `${this.name} are ${this.bloodTemperature} and ${this.backbone}. Examples include Ducks and Pigeons.`;
    }

    listAnimals() {
        console.log('Examples of AVES include Chickens, Ducks, and Pigeons.');
    }
}


class Mammals extends Vertebrates {
    constructor(name) {
        super(name);
        this.bloodTemperature = 'warm blooded';
        this.summary = `${this.name}s are ${this.bloodTemperature} and ${this.backbone}. Examples include Sheep and Humans.`;
    }

    listAnimals() {
        console.log('Examples of Mammals include Sheep, Humans, and Goats.');
    }
}


const arthropods = new Arthropods('Arthropods');
const fish = new Fish('Fish');
const amphibians = new Amphibians('Amphibians');
const reptiles = new Reptiles('Reptiles');
const birds = new Birds('Birds');
const mammals = new Mammals('Mammals');
const animalClasses = [arthropods, fish, amphibians, reptiles, birds, mammals];


console.log('Here is a simple classification for Kingdom Animalia:');
console.log(animalClasses);

mammals.selfDescription();

mammals.listAnimals();

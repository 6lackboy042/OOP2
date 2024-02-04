# Animal Classification System

This is a basic implementation of an animal classification system using JavaScript. The code utilizes object-oriented programming concepts such as classes, inheritance, and encapsulation to represent different categories of animals within the Animalia kingdom.

## Classes Overview

- `KingdomAnimalia`: The base class representing the overall animal classification.
- `HasBackbone` and `NoBackbone`: Subclasses indicating whether an animal has a backbone or not.
- Specific subclasses for different categories of animals:
  - `Arthropoda`: Arthropods without a backbone.
  - `Fish`: Fish with a backbone.
  - `Amphibia`: Amphibians with a backbone.
  - `Reptile`: Reptiles with a backbone.
  - `AVES`: Birds with a backbone.
  - `Mammal`: Mammals with a backbone.

## Usage

Instantiate objects from the provided subclasses and explore the animal classification system. Each subclass has methods to describe itself and list examples of animals within the category.

```javascript
// Instantiate objects from the child/sub classes above.
const arthropods = new Arthropoda('Arthropods');
const fish = new Fish('Fish');
const amphibians = new Amphibia('Amphibians');
const reptiles = new Reptile('Reptiles');
const birds = new AVES('Birds');
const mammals = new Mammal('Mammals');
const animalClasses = [arthropods, fish, amphibians, reptiles, birds, mammals];

// Display classification for Kingdom Animalia.
console.log('Here is a simple classification for Kingdom Animalia:');
console.log(animalClasses);

// Utilize the methods below to retrieve the attributes of any class.
mammals.selfDescription();

// Utilize the methods below to get examples of animals under any class.
mammals.listAnimals();

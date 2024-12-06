// Visitor classes
var CarVisitor = function() {
    this.visit = function(car) {
        if (car.seats > 2) {
            console.log('This is clearly a car for old people.');
        } else {
            console.log('My bet is this car has at least 2 cylinders.');
        }
    }
};

var TruckVisitor = function() {
    this.visit = function(truck) {
        if (truck.towPackage) {
            console.log('We need to buy a boat.');
        }
    }
};

var MonsterTruckVisitor = function() {
    this.visit = function(monsterTruck) {
        if (monsterTruck.looksLikeADragon) {
            console.log('That is a badass monster truck.');
        } else {
            console.log('Loser.');
        }
    }
};

// Element classes
var Car = function() {
    this.seats = 5;
    this.doors = 4;
    this.accept = function(visitor) {
        visitor.visit(this);
    };
};

var Truck = function() {
    this.towPackage = true;
    this.doors = 2;
    this.accept = function(visitor) {
        visitor.visit(this);
    };
};

var MonsterTruck = function() {
    this.looksLikeADragon = true;
    this.doors = 1.5;
    this.accept = function(visitor) {
        visitor.visit(this);
    };
};

// Example usage
var myCar = new Car();
myCar.seats = 2;
myCar.accept(new CarVisitor());

var myTruck = new Truck();
myTruck.accept(new TruckVisitor());

var myMonsterTruck = new MonsterTruck();
myMonsterTruck.accept(new MonsterTruckVisitor());

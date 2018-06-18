// Create a simple class and usage
var Car = (function () {
    function Car(carName, yearOfMfg, milage, horsePower) {
        this.carName = this.carName;
        this.yearOfMfg = this.yearOfMfg;
        this.milage = this.milage;
        this.horsePower = this.horsePower;
    }
    Car.prototype.getCarName = function () {
        return this.carName;
    };
    Car.prototype.getYearOfMfg = function () {
        return this.yearOfMfg;
    };
    Car.prototype.getMilage = function () {
        return this.milage;
    };
    Car.prototype.getHorsePower = function () {
        return this.horsePower;
    };
    Car.prototype.specification = function () {
        var spec = "Car Name : " + this.getCarName() + "\n                Year Of Mfg : " + this.getYearOfMfg() + "\n                Milage : " + this.getMilage() + "\n                Horse Power : " + this.horsePower;
    };
    return Car;
}());

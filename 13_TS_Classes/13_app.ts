// Create a simple class and usage


// add a constructor to a class

// add methods to a class

// add getter and setter methods of a class

// Implement an interface and methods and variables of interface
    interface Vehicle{
    specification():string;
    }
    class Car implements Vehicle {
        private carName: string;
        private yearOfMfg: number;
        private milage: string;
        private horsePower: string;

        constructor(carName, yearOfMfg, milage, horsePower) {
            this.carName = this.carName;
            this.yearOfMfg = this.yearOfMfg;
            this.milage = this.milage;
            this.horsePower = this.horsePower;
        }

        public getCarName(): string {
            return this.carName;
        }

        public getYearOfMfg(): number {
            return this.yearOfMfg;
        }

        public getMilage(): string {
            return this.milage
        }

        public getHorsePower(): string {
            return this.horsePower;
        }

        public specification(): any {
            let spec = `Car Name : ${this.getCarName()}
                Year Of Mfg : ${this.getYearOfMfg()}
                Milage : ${this.getMilage()}
                Horse Power : ${this.horsePower}`
        }
    }
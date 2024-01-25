/*

a car is an object

PROPERTIES   =  car.name = Fiat

                car.model = 500

                car.weight = 850kg

                car.color = white

METHODS =   car.start()

            car.drive()

            car.brake()

            car.stop()

*/

const  car = {
    name: "fiat",
    model: 500,
    weight: 850,
    color: "blue",
    descreption :function(){
        // return `name of car is ${name} and modelNo is ${this.model}`;
        return " car name is : "+this.name+" and model no is : "+this.model;
    }
  };

  console.log(car);


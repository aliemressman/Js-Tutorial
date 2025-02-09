let araba = {
    renk : "mavi",
    hiz : 10,
    hizlandir: function(deger){
        this.hiz += deger;
    }
}

araba.hizlandir(30);
console.log(araba.hiz);

// Constructor ES5

function Araba(renk){
    this.renk = renk;
    this.hiz = 0;
}
Araba.prototype.hizlandir = function(deger){
    this.hiz += deger;
}

const araba1 = new Araba("red")
console.log(araba1.renk);    
araba1.hizlandir(24);
console.log(araba1.hiz);


// Constructor ES&

class Araba2{
    constructor(renk){
        this.renk = renk
        this.hiz = 0;
    }

    hizlandir(deger){
        this.hiz += deger;
    }
}

let araba2 = new Araba2("Siyah")
console.log(araba2.renk);
araba2.hizlandir(15)
console.log(araba2.hiz);

// Inheritance

class Araba3{
    constructor(renk){
        this.renk = renk
    }
}

class MotorluAraba extends Araba2{
    constructor(renk,motor) {
        super(renk);
        this.motor = motor;
    }
}

let motorluAraba = new MotorluAraba("Gri","1.6");
console.log(motorluAraba.motor);

// Encapsulation

class Araba4{
    #renk;
    constructor(renk,hiz) {
        this.#renk = renk;
        this.hiz = hiz;
    }
    getRenk(){
        return this.#renk;
    }
    setRenk(renk){
        this.#renk = renk;
    }
}

const araba4 = new Araba4("siyah",13);
console.log(araba4.getRenk());
araba4.setRenk("Gri");
console.log(araba4.getRenk());
console.log(araba4.hiz);

// polymorphism

class Shape{
    draw(){
        console.log("Şekil çizdiriliyor.");
    }
}

class Circle extends Shape{
    draw(radius){
        console.log(`${radius} radiuslu daire çizdiriliyor.`);
    }
}

let shape = new Shape;
let circle = new Circle(20);
console.log(circle.draw());

// Abstraction

class Database {
    constructor(data) {
        this._data = data;
    }
    getData() {
        return this._data;
    }
    setData(value) {
        this._data = value;
    }
}

class DataController extends Database {
    constructor(data) {
        super(data);
    }
    getData() {
        return "Data: " + super.getData();
    }
}

let dataController = new DataController("Database Data");
console.log(dataController.getData()); // "Data: Database Data"


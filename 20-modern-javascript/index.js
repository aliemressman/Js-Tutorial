// Fonksiyon Tanımlama Yöntemleri

// Geleneksel fonksiyon tanımlama
const sayHello = function(){
    console.log("hello");
}

// Ok fonksiyonu ile (arrow function) tanımlama
const sayHello2 = () => {
    console.log("hello");
}

// Tek satırda yazılabilir hali
const sayHello3 = () => console.log("hello");

// Parametre alan geleneksel fonksiyon
const sayHello4 = function(name){
    console.log(`hello ${name}`);
}

// Parametre alan arrow function
const sayHello5 = (name) => console.log(`hello ${name}`);

sayHello5("ali");

// Array Methods (Dizi Metotları)

// Map -> Dizinin her elemanı üzerinde işlem yapar ve yeni bir dizi döndürür.
const number = [1,2,3,4,5];
const squares = number.map((x) => x * x); // Her elemanı kendisiyle çarpar
console.log(squares); // [1, 4, 9, 16, 25]

// Filter -> Belirli bir koşulu sağlayan elemanları filtreler ve yeni bir dizi döndürür.
const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumber = numbers.filter((x) => x % 2 === 0); // Sadece çift sayıları alır
console.log(evenNumber); // [2, 4, 6, 8, 10]

// Reduce -> Dizideki elemanları işleyerek tek bir değer üretir (toplam, çarpım vb.).
const number2 = [1,2,3,4,5];
const sum = number2.reduce((acc, x) => acc + x, 0); // Tüm elemanları toplar
console.log(sum); // 15

// Find -> Belirtilen koşulu sağlayan ilk elemanı döndürür.
const number3 = [1,2,3,4,5];
const findNumber = number3.find((x) => x > 2); // 2'den büyük ilk elemanı bulur
console.log(findNumber); // 3

// Some -> En az bir elemanın belirli bir koşulu sağlayıp sağlamadığını kontrol eder. (true/false döner)
const numbers2 = [1,2,3,4,5,6,7,8,9,10];
const isBigNumberExists = numbers2.some((x) => x > 10); // 10'dan büyük eleman var mı?
console.log(isBigNumberExists); // false

// Every -> Tüm elemanların belirli bir koşulu sağlayıp sağlamadığını kontrol eder. (true/false döner)
const number4 = [2,4,6,8];
const allIsEven = number4.every((x) => x % 2 === 0); // Tüm elemanlar çift mi?
console.log(allIsEven); // true

// Spread Operators
const numbers3 = [1, 2, 3];
const numbers4 = [...numbers3, 4, 5, 6];
console.log(numbers4); // [1, 2, 3, 4, 5, 6]

const numbers5 = [1, 2, 3];
const add = (x, y, z) => x + y + z;
console.log(add(...numbers5)); // 6

const obj1 = {name: "John", age: 30};
const obj2 = {...obj1, job: "Developer"};
console.log(obj2); // { name: "John", age: 30, job: "Developer" }

// Destructuring
const obj = {name: "John", age: 30, job: "Developer"};
const {name, age} = obj;
const newObj = {name, age, location: "New York"};
console.log(newObj); // { name: "John", age: 30, location: "New York" }

const obj3 = {name: "John", age: 30};
const {name: firstName} = obj3;
console.log(firstName); // "John"

// MAPS
const map = new Map();
map.set("name", "Ali");
map.set("age", 18);
map.set("job","student");

console.log(map.get("name"));
console.log(map.delete("job"));
console.log(map);
map.forEach((value,key) => console.log(`${key}: ${value}`));

// SET
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(3);
console.log(set);
set.delete(2);
console.log(set);
set.forEach(value => console.log(value));




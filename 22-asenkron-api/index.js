// Asenkron programlama
/* console.log("1. işlem");
setTimeout(() => {
    console.log("2. İşlem");
    
}, 2000);
console.log("3.İşlem");

// CallBack Fonksiyonu
function sayHello(name, callback){
    callback();
    console.log(`Hello ${name}`);
}

function goodBye(){
    console.log("Görüşmek üzere");
}

sayHello("Emre",goodBye)
*/
// Ajax ve HTTP istekleri
/*
let myList;
const xhr = new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/users")
xhr.onload = function(){
    const response = xhr.responseText;
    if(xhr.status === 200){
        console.log(JSON.parse(response));
    }
    else{
        console.log("Hata oluştu "+ xhr.status);
    }
};

xhr.send()
*/

// Promise
/*
function getRandomNumber(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const number = Math.floor(Math.random() * 100);
            if(number % 2  == 0){
                resolve(number);
            }
            else{
                reject(`Hata: ${number} sayısı tek bir sayıdır! `);
            }
        }, 1000);
    })
}

getRandomNumber()
    .then((number) => console.log("Çözümlendi: " +number)
    .catch((error) => console.log(error)
    )
) */

// FETCH

/* fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json)
    .then((data) => console.log(data))
    .chatch((error) => console.log(error));*/

// ASYNC VE AWAIT

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
}

getData();
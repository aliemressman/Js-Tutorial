let meyve = ["armut","elma","muz","kiraz","kayısı"];

for(let i = 0; i < meyve.length; i++){
    console.log(meyve[i]);
    
}

let sayilar = [10,204,432,546,36];
let  toplam = 0;
/*
for(let i = 0; i < sayilar.length; i++){
    toplam = toplam + sayilar[i];
}*/

for(let index in sayilar){
    console.log(toplam += sayilar[index]);
    
}
console.log(toplam);

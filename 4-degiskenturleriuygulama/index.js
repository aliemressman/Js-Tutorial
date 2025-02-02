let ogrenci1 = "MertDemir";
let ogrenci1DT = 2001;
let ogrenci1Not1 = 100;
let ogrenci1Not2 = 90;
let ogrenci1Not3 = 10;
let ogr1Ort = (ogrenci1Not1 + ogrenci1Not2 + ogrenci1Not3) / 3;


let ogrenci2 = "AyseDemir";
let ogrenci2DT = 2002;
let ogrenci2Not1 = 60;
let ogrenci2Not2 = 30;
let ogrenci2Not3 = 10;
let ogr2Ort = (ogrenci2Not1 + ogrenci2Not2 + ogrenci2Not3) / 3;


let suankiYil = 2025;
gecmeNotu = 40;

let ogr1DersDurum = ogr1Ort > gecmeNotu;
let ogr2DersDurum = ogr2Ort > gecmeNotu;

ogrenci1Yas = suankiYil - ogrenci1DT;
ogrenci2Yas = suankiYil - ogrenci2DT;
console.log("Mert Yas: " ,ogrenci1Yas);
console.log("mert ders durum : " ,ogr1DersDurum);
console.log("ayse ders durum : " ,ogr2DersDurum);



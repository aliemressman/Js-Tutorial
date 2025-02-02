let tarih = new Date();

let result;

result = tarih.getDay();
result = tarih.getFullYear();
result = tarih.getHours();
result = tarih.getTime();

result = tarih.setFullYear(2024);
result = tarih.setMonth(4);

let dogumTarihi = new Date(2000, 11, 4);
result = tarih.getFullYear - dogumTarihi.getFullYear;

result = tarih;
console.log(result);

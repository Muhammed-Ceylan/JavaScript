//Destructing

//let number1, number2;
//arr =[100,200,300,400];

////number1 = arr[0];
////number2 = arr[1];

//const [number1,number2] = arr;// arr deki indexlere denk gelen indexler ile eşleşir

//console.log(number1,number2);

//Obje Destructing
// Objeler üzerinde index olarak eşleme yapmaz key bilgilerine göre eşleştirme yapar.
//const numbers ={
//    a:10,
//    b:20,
//    c:30,
//    d:40,
//    e:50
//};
//const {a,c,e} = numbers;
//console.log(a,c,e);

//Function Destructing

//const getLangs = () => ["Python","Java","PHP"];
//const [a,b,c] = getLangs();
//console.log(a,b,c);

//bir obje içerisine arrow func. kullanarak bir fonksiyon yazdık ve ekranda gösterdik
//const person = {
//    name:"Muhammed",
//    year:1997,
//    salary:11000,
//    showInfos: () => console.log("Bilgiler Gösteriliyor"),
//};

//const {name:isim,year:yıl,salary:maaş,showInfos:bilgileriGoster} = person;

//console.log(isim,yıl,maaş);
//bilgileriGoster();
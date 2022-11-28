//For In and For Of
//------------------------------------
//Örnek obje,array ve string değerler
//const person = {
//    name:"Muhammöd",
//    age:25,
//    salary:100,
//};
//const langs = ["Python","Java","Php"];
//const name = "Mahmut";
//------------------------------------
// For In
//Obje üzerinde gezinme
//for(let prop in person) {
//    console.log(prop,person[prop]);
//}
//-------------------------------------
//Array üzerinde gezinme
//for(let index in langs){
//    console.log(index,langs[index]);
//}
//-------------------------------------
//String üzerinde gezinme
//for(let index in name) {
//    console.log(index,name[index]);
//}
//--------------------------------------
//For Of--Obje üzerinde gezinemiyoruz
//Obje--TypeError: person is not iterable
//for(let value of person) {
//    console.log(value);
//}
//-------------------------------------
//Array üzerinde değerlere direkt ulaşır
//for(let value of langs) {
//    console.log(value);
//}
//------------------------------------------
//String üzerinde gezinme-- elemanlara direkt ulaşır.
//for(let char of name) {
//    console.log(char);
//}
//-----------------------------------------
//Maps -- Her KEY değerine bir VALUE değeri gelir.
//-------------------------------------------------
//let myMap = new Map();//Map oluşturma
//3 adet key oluşturuldu
//const key1 = "Muhammed";
//const key2 = {a:10, b:20};
//const key3 = () => 2;
//--------------------------------------------------
//map e ekleme işlemi
//myMap.set(key1,"String Değer");
//myMap.set(key2,"Obje Değer");
//myMap.set(key3,"Function Değer");
//---------------------------------------------------
//key'e karşı değeri getirmek için get işlemini yaparız
//console.log(myMap.get(key1));
//console.log(myMap.get(key2));
//console.log(myMap.get(key3));
//-----------------------------------------------------
//map içerisindeki tüm key ve value ları getirir.
//console.log(myMap);
//-----------------------------------------------------
//map içerisinde kaçtane değer varsa getirmek için size prop çağırırızü
//console.log(myMap.size);
//---------------------------------------------------
//Yeni bir map oluşturduk
//const cities = new Map();
//---------------------------------------------------
//map e eklemeleri yaptık
//cities.set("Samsun",3);
//cities.set("İstanbul",5);
//cities.set("Ankara",9);
//cities.set("Aydın",1);
//-------------------------------------------------
// Foreach ile üzerinde gezinme işlemi
//cities.forEach(function(value,key) {
//    console.log(value, key );
//});
//-------------------------------------------------
//For Of --destructing yapısıda kullanılmış oluyor
//for(let [key,value] of cities) {
//    console.log(value,key);
//}
//---------------------------------------------
// Sadece key ler üzerinde gezinme
//for(let key of cities.keys()){
//    console.log(key);
//}
//---------------------------------------
// Sadece value üzerinde gezinme
//for(let value of cities.values()){
//    console.log(value);
//}
//---------------------------------
//Array ler üzerinden map oluşturma
//const array = [["key1","value1"],["key2","value2"]];
//const lastMap = new Map(array);
//console.log(lastMap);
//---------------------------------------
//Maplerden array oluşturma
//const cities = new Map();
//map e eklemeleri yaptık
//cities.set("Samsun",3);
//cities.set("İstanbul",5);
//cities.set("Ankara",9);
//cities.set("Aydın",1);
//Burada array olarak 3 array gelir ama tek array içerisinde yer alırlar
//const array = Array.from(cities);
//console.log(array);
//------------------------------------------------
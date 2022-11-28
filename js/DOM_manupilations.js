//                        ---------------------------DOM MANÜPİLASYONU-------------------------------------

//let value;
//let element;

// value = document;
// value=document.all; // Tüm html elementler html collection olarak geri geliyor.Js deki bir obje ve üzerinde gezilebilir.
// value=document.all.length; // Kaç element olduğunu görebiliriz.
// value=document.all[0];
//
// const collections = Array.from(document.all);
// collections.forEach(function (collection) {
//     console.log(collection);
//})

//Scripts
// value = document.scripts;//scriptlere listeler
// value = document.scripts.length;// uzunluk bilgisini verir
// value = document.scripts[0];// ilgili indexteki script bilgileri verir.

//Links
// value = document.links;//linkleri sıralar.
// value = document.links[0];// ilgili indexte yer alan veri gelir
// value = document.links[document.links.length-1];// En son script elemanına ulaşabiliriz
// value = document.links[document.links.length-1].getAttribute("class");// Scripte ait class bilgisine ulaşabiliriz
// value = document.links[document.links.length-1].className;// Scripte ait class bilgisine ulaşabiliriz
// value = document.links[document.links.length-1].getAttribute("href");// Scripte ait href bilgisine ulaşabiliriz

//Forms
// value = document.forms;//formlar gelir
// value = document.forms.length;//formlar adedi gelir
// value = document.forms["form"];//eğer formumuzun bir name parametresi varsa bu şekilde de forma ulaşabiliriz.
// value = document.forms[0].id;//formun id bilgisine ulaşabiliriz.
// value = document.forms[0].getAttribute("id");//formun id bilgisine ulaşabiliriz.
// value = document.forms[0].name;//formun name bilgisine ulaşabiliriz.
// value = document.forms[0].method;//İlgili formun hangi method kullandığını görebiliriz.

//console.log(value);

//Element Seçme Yöntemleri
//id göre seçme


// element = document.getElementById("todo-form");// Form içerisindeki eşleşen element gelir yoksa null bir değer gelir
// element = document.getElementById("tasks-title");//h5 elementimiz gelir
// element = document.getElementsByClassName("list-group-item");//tüm aynı class isimliler geldi
// element = document.getElementsByClassName("card-header");// bir tane olan da getirilebilir
// element = document.getElementsByTagName("li");// Element Tag'e göre li'lerin tümünü alabiliyoruz.
// element = document.querySelector("#todo-form");//query selector ile çağırma-sayfadaki tek bir elementi seçer
// element = document.querySelector("#tasks-title");//id göre kullanma
// element = document.querySelector(".list-group-item");//class a göre kullanma
// element = document.querySelector("li");
// element = document.querySelector("div");
// element = document.querySelectorAll(".list-group-item");//queryselectorall kullanabiliriz-birden fazla seçmek istersek nasıl yaparız.
// element.forEach(function (el) {
//     console.log(el);
// })// üzerinde gezinmemezi sağlar.

//const element = document.querySelector("#clear-todos");//id ye ait elementi almamızı sağlar.
// console.log(element.id);//id bilgisini alırız
// console.log(element.className);//class bilgisini alırız
//console.log(element.classList); // tüm class bilgileri listelenir
//console.log(element.textContent);// eğer bir içerik varsa o gelir.
// console.log(element.innerHTML);// html etiketleri ile bilgileri almamızı sağlar.
// console.log(element.href);//href özelliğini alırız
//console.log(element.style);// css özelliklerini direkt alabiliriz.

//style ve element özelliklerini değiştirme
// element.className = "btn btn-primary";//buton rengi değişmiş olur
// element.style.color = "#000";//buton içerisinde yazı rengini değiştirir
// element.style.marginLeft ="5px";//sol tarafa margin vermemizi sağlar
// element.href = "https://www.google.com.tr";//farklı sayfaya göndeririz.
// element.target = "_blank";//yönlendirme için bu özellikleri kullanırız.
// element.textContent ="Silin";//içerik değişebilir
// element.innerHTML = "<span style='color: green'>Silin</span>"//Dinamik şekilde içerik değişikliği için innerHTML kullanılır

// const elements = document.querySelectorAll(".list-group-item");//li elementlerinin css leri üzerinde değişiklikler yaptık.
// elements.forEach(function (el) {
//     el.style.color = "red";
//     el.style.background = "#eee";
// })

// const element = document.querySelector("li:first-child");//ilk çocuğu getirir.
// const element = document.querySelector("li:last-child");//son çocuğu getirir.
// const element = document.querySelector("li:nth-child(2)");//ikinci çocuğu getirir.
// const element = document.querySelector("li:nth-child(3)");//üçüncü çocuğu getirir.
// const element = document.querySelectorAll("li:nth-child(odd)");//tekil olan çocukları getirir.(1-3-5-7)
// const element = document.querySelectorAll("li:nth-child(even)");//çift olan çocukları getirir.(2-4-6-8)
// element.forEach(function (el) { // seçili olan çocukların css leri üzerinde oynamalar yapılabilir
//     el.style.color = "green";
//     el.style.background = "#ccc";
// })

// let value;
//
// const todoList = document.querySelector(".list-group")//list group sınıfını seçtik
// const todo = document.querySelector(".list-group-item:nth-child(2)");//ikinci çocuğu seçtik
// const cardrow = document.querySelector(".card.row"); //iki class olduğu için ikisinide yazdık
//
// value = todoList;
// value = todo;
// value = cardrow;
//
// //Child Nodes - Text dahil alır
//
// value = todoList.childNodes;//todoListin çocucklarını aldık
// value = todoList.childNodes[0];//textlerin içerisinde olanları görmek için bu şekilde seçeriz
//
// //Children sadece element olanları alır
//
// value = todoList.children; // boşlukları saymadan getirir.
// value = todoList.children[0]; // ilk çocuğu getirir
// value = todoList.children[todoList.children.length-1]; // son çocuğu getirir
// value = todoList.children[2].textContent = "Değişti"; // ikinci index yani 3. çocuğun text bilgisini değiştirebiliriz.
//
// value = cardrow.children;
// value = cardrow.children[2].children[1].textContent = "Burasıda Değişti"; // cardrowun çocuklarını almış olduk
//
// value =todoList;
// value = todoList.firstElementChild; // ilk çocuğunu indexlemek yerine bu şekilde çıkarabiliriz.
// value = todoList.lastElementChild;//son çocucğunu almış olduk.
// value = todoList.childElementCount;// lenght yerine kullanabiliriz.
//
// value = cardrow;
// value = cardrow.parentElement; // bir üst elemente geçiş sağlar.
// value = cardrow.parentElement.parentElement; // bir üst elementinde elementini bulmamızı sağlar.
//
// //Element Kardeşlerini Bulma
// value = todo;
// value = todo.previousElementSibling;// Bir önceki kardeşe git
// value = todo.nextElementSibling;// Bir sonraki kardeşe gider
// value = todo.nextElementSibling.nextElementSibling;//iki ileri kardeşe gidebiliriz

//yeni element oluşturma
//const newLink = document.createElement("a");//yeni element oluştu
//const cardBody = document.getElementsByClassName("card-body")[1];
//newLink.id = "clear-todos";//id verdik
//newLink.className = "btn btn-danger";//class verdik
//newLink.href = "https://www.google.com.tr";//link verdik
//newLink.target = "_blank";//yeni pencerede açtık
////const text = document.createTextNode("Selam");// Bu işlemi textContent ile yaparsak car içerisindeki tüm veri gider. createTextNode ile yapıyoruz.
////cardBody.appendChild(text);// cardBody nin en sonuna yeni bir çocuk eklemiş oluyoruz.
////console.log(cardBody);
//newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));//newLink parametremizi en son çocuk olarak oluşturduk
//cardBody.appendChild(newLink);// ve çocuğu ekledik
//console.log(newLink);


//Dinamik Silme İşlemi
//const todoList = document.querySelector("ul.list-group");
//const todos = document.querySelectorAll("li.list-group-item");
//remove methodu
//todos[1].remove();
//todoList.removeChild(todoList.lastElementChild);
//todoList.removeChild(todos[3]);
//console.log(todoList);


//replace elementleri değiştirme
//const cardBody = document.querySelectorAll(".card-body")[1];//card-body isimli ikinci elemanı alıyoruz.
//const newElement = document.createElement("h3");//h3 elementini oluşturduk
//newElement.className = "card-title"; // class verdik
//newElement.id = "tasks-title"; //id verdik
//newElement.textContent = "Yeni Todolar";//içerik verdik
//Eski Element
//const oldElement = document.querySelector("#tasks-title");//tasks-title isimli id yi aldık.
//cardBody.replaceChild(newElement,oldElement);// yeni element ile eski elementi değiştirme
//console.log(cardBody);


//const todoInput = document.getElementById("todo");
//let element;

////element = todoInput;
////todoInput.classList.add("newClass");
//element = todoInput;
////todoInput.classList.remove("newClass");
//element = todoInput.getAttribute("placeholder");
//element = todoInput.setAttribute("placeholder","boşluk");

//element =todoInput;

//console.log(element);









//// Events
//const filterInput = document.getElementById("filter");// element seçimi
//const todoForm = document.getElementById("todo-form");

////filterInput.addEventListener("focus",function(e){//event ekleme focus özellikle tıklandığında tepki alma diyelim
////    console.log(e);

////});

//todoForm.addEventListener("submit",submitForm);//dışardan bir fonksiyonda çağırabiliriz

//function submitForm(e){
//    console.log("sad");
//    e.preventDefault();//submit olan eventi engellemiş olduk ve yönledirme yapmadan görmemizi sağladı
    
//}

//Klavye eventleri

//keypress klavyeden basılan bir tuş sonrası çalışan event-harfler ve sayılar
//document.addEventListener("keypress",run);//keypress için event oluştururuz

//function run(e){//fonskiyon
//    console.log(e.which);//karakterin sayısal değerlerini gösterir
//    console.log(e.key);//neye bastığımızı görürüz
//    console.log("naber");//her tüşa basıldığında yazar
//}

//keydown tuşa basınca tetiklenir. tüm tuşları algılar.
//document = addEventListener("keydown",run);

//function run(e){
//    console.log(e.key);
//}

//keyup bir tuşa basmayı bıraktığımız an oluşur.
//document = addEventListener("keyup",run);

//function run(e){
//    console.log(e.key);
//}

//Buradaki örnekte input alanı içerisine yazılan veriyi title alanına dinamik olarak ekledik
//const header = document.querySelector(".card-header");
//const todoInput = document.querySelector("#todo");

//todoInput.addEventListener("keyup",changeText);

//function changeText(e){
//    header.textContent= e.target.value;
//}

//MOUSE EVENTLERİ

const carBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

//Click Event
//title.addEventListener("click",run);
//doubleClickEvent--çift tık
//title.addEventListener("dblclick",run);
//Mouse Down
//title.addEventListener("mousedown",run);
//Mouse Up--tıklamadan elini çektiğinde
//title.addEventListener("mouseup",run);
//Mouse Over-- Element üzerine gelince oluşur
//title.addEventListener("mouseover",run);
//Mouse Out -- üstüne gelip geri çıkınca olur
//title.addEventListener("mouseout",run);
//Mouse Enter ve Mouse Leave
//carBody.addEventListener("mouseenter",run);//card içerisinde iken sayar
//carBody.addEventListener("mouseleave",run);//card dışına çıkınca sayar
//carBody.addEventListener("mouseover",run);//card içerisinde sürekli oluşur. out içinde geçerli.
//function run(e){
//    console.log(e.type);
//}

//dom content loaded-- döküman yüklendiğinde kullanılabilir
//document.addEventListener("DOMContentLoaded", load);

//function load(e){
//    console.log("Sayfa Yüklendi");
//}

//INPUT EVENTLERİ
//const filterInput = document.getElementById("filter");
//focus
//filterInput.addEventListener("focus",run);//odaktayken
//filterInput.addEventListener("blur",run);//odaktan çıkınca
//paste
//filterInput.addEventListener("paste",run);// alana birşey yapıştırıldığında 
//copy
//filterInput.addEventListener("copy",run);// alandaki bir yazının kopyalanması 
//cut
//filterInput.addEventListener("cut",run);// alandaki bir yazının kesilmesi 
//select
//filterInput.addEventListener("select",run);//yazıdan bir alan seçilnmesi veya tamamının seçilme durumunda çalışır
//function run(e){
//    console.log(e.type);
//}

//EVENT CAPTURİNG AND BUBBLİNG
//bubbling
//document.querySelector(".container").addEventListener("click",function(){
//    console.log("Div Container");
//});

//document.querySelector(".card.row").addEventListener("click",function(){
//    console.log("Card Row");
//});
//document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//    console.log("Card Body");
//});

//capturing olay yakalama 
//const cardBody = document.querySelectorAll(".card-body")[1];
//cardBody.addEventListener("click",run);
//function run(e){
//    if(e.target.className === "fa fa-remove"){
//        console.log("Sil");
//    }
//    if(e.target.id === "filter"){
//        console.log("Filtreleme");
//    }
//    if(e.target.id === "clear-todos"){
//        console.log("Tümü temizle");
//    }
//}



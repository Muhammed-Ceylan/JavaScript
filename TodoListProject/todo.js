//Tüm Elementleri Seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListener();

//Fonksiyonlar

function eventListener() { // Tüm event listener lar
    form.addEventListener("submit",addTodo);
    //LocalStorage içerisinde yer alan tüm todoları ekrana ekleme işlemi
    document.addEventListener("DOMContentLoaded",loadAllTodosUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);

}

function loadAllTodosUI() { // Sayfa yenilendiğinde eklenen elemanların kaybolmaması için yazılan func.
    let todos =getTodosFromStorage();// tekrar kontrol ediliyor
    // todos arrayi üzerinde teker teker geizinilip todo adıyla, sıralı şekilde listeye ekleniyor.
    todos.forEach(function(todo) {
        addTodoToUI(todo);    
    });
}

function addTodo(e) {
    // Input alanına girilen metnin başında ve sonunda olan boşluklardan kurtulma ve newTodo içerisine gönderilme işlemi
    const newTodo = todoInput.value.trim();
    //eğer input alanı boş ise ekleme işlemi yapmaması için bir bilgilendirme mesajı vereceğiz.
    if(newTodo === "") {

        showAlert("danger","Lütfen bir todo girin..");
    }
    else {
        // arayüzde alınan todo nun listeye gönderilme işlemini yapan fonksiyon
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Todo başarılı şekilde eklendi.")
    }
    e.preventDefault();
}
function showAlert(type,message){//iki adet parametre alıyor
    const alert = document.createElement("div");//div elementi oluşturuluyor
    alert.className = `alert alert-${type}`; // class name dinamik olarak veriliyor.
    alert.textContent = message; // message bilgisi dinamik olarak veriliyor
    firstCardBody.appendChild(alert);// butondan sonra hata mesajı görünmesi için alert elementi en sona ekleniyor

    //setTimeOut methodu ile mesajı 1 sn sonra silecek
    setTimeout(function(){
        alert.remove();
    },1000);
    
}
function getTodosFromStorage() { //Storage içerisine tüm todoları alacak kontrol edecek sürekli çalışacak func.
    let todos;
    if(localStorage.getItem("todos") === null){ //eğer localStorage ta todos isimli bir array var mı diye bakar
        todos = []; //boşsa bu array oluşur
    }

    else {
        todos = JSON.parse(localStorage.getItem("todos"));// doluysa array halinde geri döndürülür
    }
    return todos;
}

function addTodoToStorage(newTodo) {
   let todo = getTodosFromStorage();// todo değişkenine func. daki değeri atar.
   todo.push(newTodo); // yeni todo yu ekler
   // yeni eklenen todo yu storage ekler, arrayleri string hale çevirmek için.
   localStorage.setItem("todos", JSON.stringify(todo)); 
}

function addTodoToUI(newTodo) { // ALınan string değerini list-item olarak eklenmesini sağlayan func.
    const listItem = document.createElement("li");// li elementini yarattık
    const link = document.createElement("a"); // a elementini yarattık
    link.href= "#"; 
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";// html ekleme işlemi için innerHTML kullanırız
    //list item class bilgisini ekledik.
    listItem.className = "list-group-item d-flex justify-content-between";
    //Text Node Ekleme--List Item içerisine eklemiş olduğumuz newTodo yu aktarma işlemi
    //listItem için oluşturmuş olduğum newTodo verisini ve link bilgilerini eklemiş olduk
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    //todoList altına elimizdeki listItem eklenmeli çünkü ul etiketi altında yer almalı.
    todoList.appendChild(listItem);
    //input alanının içerisini temizlemiş olduk
    todoInput.value ="";
}
function deleteTodo(e){
    if(e.target.className === "fa fa-remove"){ // x iconuna ulaştık
        e.target.parentElement.parentElement.remove(); // tüm li elementini sildik
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent); // içeriği func yardımıyla sildik ve storage dan kaldırdık
        showAlert("success","Todo başarılı şekilde silindi.")
    }
}
function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage(); // tüm eklenenleri getirdik
    //tüm elemanlar üzerinde gezindik ve indexine göre  elemanı seçip kaldırdık
    todos.forEach(function(todo,index){
        if (todo === deletetodo){
            todos.splice(index,1);// elemanı silmemizi sağladı
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));//storege son halini gördük
}
function filterTodos(e){
    const filterValue = e.target.value.toLowerCase(); //input alanına girilen değeri küçük harf yaptık
    const listItems = document.querySelectorAll(".list-group-item"); // tüm li elementleri çektik
    
    listItems.forEach(function(listItem){// tüm li elementleri üzerinde gezindik
        const text = listItem.textContent.toLowerCase();// tüm li elementlerini içeriğini küçük harf olarak tuttuk
        if(text.indexOf(filterValue) === -1){ // içerik olarak uyuşmayanları göstermedik
            listItem.setAttribute("style", "display : none !important");//o elemana css kodu ekleyerek manupile ettik
        }
        else { // içerik olarak uyuşanları gösterdik
            listItem.setAttribute("style", "display : block ");
        }
    });
}
function clearAllTodos(){
    //Arayüzden todoları temizleme
    if(confirm("Tümünü Silmek İstediğinize Emin Misiniz?")){// onay mesajı çıkarma
        //todoList.innerHTML =""; //Yavaş Yöntem
        while(todoList.firstElementChild != null){ // listedeki ilk eleman var mı yok mu sorgusu
            todoList.removeChild(todoList.firstElementChild); // ilk elemen olduğu sürece sil
        }
        localStorage.removeItem("todos");//storage tan tüm elemanları kalıcı olarak sil
    }
}
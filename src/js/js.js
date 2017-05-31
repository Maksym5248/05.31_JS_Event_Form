var form = document.querySelector("#form");
var coments = document.querySelector("#coments");
var delet = document.querySelector("#delet");
var buttonSubmit = document.querySelector("#Button-submit");

form.addEventListener("submit", function (e) {
    if (buttonSubmit.textContent == "Залишити коментар"){
        e.preventDefault();
        var text = this.text.value;
        if ( !text == "" ){
            var li = document.createElement("li");
            li.textContent = text;
            coments.insertBefore(li,coments.childNodes[0]);
            this.text.value = "";
        }
    }
});

delet.addEventListener("click", function (e) {
    e.preventDefault();
    coments.removeChild(coments.childNodes[0]);
});

coments.addEventListener("click", function (e) {
    var li = e.target;
    txtLi = li.textContent;
    form.text.value = txtLi;
    buttonSubmit.textContent = "update";
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            li.textContent = form.text.value;
            buttonSubmit.textt = "Залишити коментар";
            li = "";
            //this.text.value = "";                 невиходить обнулити вміст значення
        })
});
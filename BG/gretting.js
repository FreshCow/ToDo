const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

  const USER_LS = "currentUser",
   showing_cn = "showing";

   function savename(text){
       localStorage.setItem(USER_LS, text);
   }

   function handleSubmit(event) {
       event.preventDefault();
       const currentValue = input.value;
       paintgreeting(currentValue);
       savename(currentValue);
   }

   function askForName() {
       form.classList.add(showing_cn);
       form.addEventListener("submit",handleSubmit);
   }

  function paintgreeting(text){
      form.remove(showing_cn);   //form.classList.remove(showing_ch);
      greeting.classList.add(showing_cn);
      greeting.innerText = `안녕하세요~ ${text}님`;
  }

  function loadName(){
      const currentUser = localStorage.getItem( USER_LS);
      if(currentUser === null){
          askForName();
      }else{
          paintgreeting(currentUser);
      }
  }

function init(){
    loadName();
}

init();
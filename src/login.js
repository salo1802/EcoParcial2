
const user= document.getElementById('username');
const password = document.getElementById('password');
const logBtn = document.getElementById('loginBtn');
const userID

logBtn.addEventListener("click",function(){
    alert(user.value + " " + password.value);
    const localstorage = window.localStorage;
    localstorage.setItem('id', userID);
    window.location.href="index.html";
});
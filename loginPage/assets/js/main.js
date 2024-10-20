/*===== FOCUS =====*/
const inputs = document.querySelectorAll(".form__input")

/*=== Add focus ===*/
function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

/*=== Remove focus ===*/
function remfocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

/*=== To call function===*/
inputs.forEach(input=>{
    input.addEventListener("focus",addfocus)
    input.addEventListener("blur",remfocus)
});
const validUser = {
    username: "amira",
    password: "amira123"
};
// التحكم في تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUser.username && password === validUser.password) {
        window.location.href = '../index.html';
    } else {
        document.getElementById('loginError').innerText = 'Invalid username or password!';
    }
});

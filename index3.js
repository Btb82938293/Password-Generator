const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordField = document.getElementById("passwordField")
const textInput = document.getElementById("text-input")
document.getElementById("btn").addEventListener("click", generate)

function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function getPassword() {
    let password = ""
    for (let i = 0; i < textInput.value; i++) {
        password += getRandomCharacter()
    }
    return password
}

function generate() {
    if (textInput.value.length > 0) {
    passwordField.textContent = getPassword()
    passwordField.classList.remove("warning")
    document.getElementById("info").textContent = ""
    document.getElementById("info").classList.remove("hidden")
} else {
    passwordField.textContent = "Please enter the length of the password"
    passwordField.classList.add("warning")
    document.getElementById("info").textContent = ""
}
}

passwordField.addEventListener("click", function copy() {
    const str = passwordField.innerText
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    document.getElementById("info").textContent = "Copied"
    setTimeout(function hide() {
        document.getElementById("info").classList.add("hidden")
    }, 2000)
})
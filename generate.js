const passwordBox = document.getElementById('password');
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const digit = "0123456789";
const symbol = "!@$#%^&*(){}[]<>/-+=";

const allChars = upperCase+lowerCase+digit+symbol;
function createpassword(){
    let password = "";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=digit[Math.floor(Math.random()*digit.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];

    }
    passwordBox.value = password;

}
function copyPassword(){
    if(passwordBox){
        passwordBox.select();

        try{
            document.execCommand("copy");
            console.log("Text Copied to clipboard");
        }catch(err){
            console.error("Unable to copy text",err);
        }
    }
    else{
        console.error("PasswordBox with Id password not found");
    }
}



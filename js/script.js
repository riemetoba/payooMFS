let firstPart = document.getElementById("firstPart");
let numberInput = document.getElementById("numberInput");
let pinInput = document.getElementById("pinInput");
let loginBtn = document.getElementById("loginBtn");
let errorMsg = document.getElementById("errorMsg");
let secondPart = document.getElementById("secondPart");
// =====================> 
    loginBtn.addEventListener("click",()=>{
        if (numberInput.value == "017" && pinInput.value == 6666) {
            // console.log("thik ache"); 
            numberInput.value = "";
            pinInput.value = "";
            secondPart.removeAttribute("hidden");
            firstPart.setAttribute("hidden", true);
        }
     else if (numberInput.value == "" && pinInput.value == "") {
        // console.log("input dao"); 
        errorMsg.removeAttribute("hidden");
        let newErrorMsg = "Plaese type your Number & Pin.";
        errorMsg.innerText = newErrorMsg;
        errorMsg.style.background = "blue";
        errorMsg.style.padding = "10px 20px";
        errorMsg.style.borderRadius = "10px";
     }
        else{
            errorMsg.removeAttribute("hidden");
        }
    })
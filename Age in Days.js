    function ageInDays () {
    let yearOfBirth = prompt("What Year were you born Friend?");
    let ageDays = (2020 - yearOfBirth) * 365;
    let h1 = document.createElement("h1");
    let outCome = document.createTextNode("You are " + ageDays + "days Old.");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(outCome);
    
    document.getElementById("flex-box-result").appendChild(h1);

}

function reset() {
    document.getElementById("ageInDays").remove();
}




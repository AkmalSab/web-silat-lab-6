document.getElementById("colorSelection").addEventListener("change", ChangeBackgroundColor);
document.getElementById("pageSelection").addEventListener("change", ChangePage);
document.getElementById("process").addEventListener("click", DisplayOutput);
        
var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

function DisplayOutput(){
    
    document.getElementById("date").innerHTML += date;
    document.getElementById("first_name").innerHTML += document.getElementById("firstName").value;
    document.getElementById("last_name").innerHTML += document.getElementById("lastName").value;
    document.getElementById("address_result").innerHTML += document.getElementById("address").value;

    var gender = document.getElementsByName("gender");
    var i;
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            document.getElementById("gender_result").innerHTML += gender[i].value;
        }
    }

    document.getElementById("email_result").innerHTML += document.getElementById("email").value;
    document.getElementById("comment_result").innerHTML += document.getElementById("comment").value;

    var favourite = document.getElementsByName("favourite");
    var i;
    for (i = 0; i < favourite.length; i++) {
        if (favourite[i].checked) {
            document.getElementById("favourite_result").innerHTML += favourite[i].value + ' | ';
        }
    }
}

function ChangePage(){
    window.location.href = document.getElementById("pageSelection").value;

}

function ChangeBackgroundColor(){
    document.getElementById("bodyPage").style.backgroundColor = document.getElementById("colorSelection").value;
}
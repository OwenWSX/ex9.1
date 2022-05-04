function validateform() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var Age= document.getElementById("Age").value;
    var Telephone = document.getElementById("Telephone").value;
    
    var course = document.getElementById("course").value;
    

    if (!firstname) {
        alert("Name can't be blank");
        return false;
    }
    if (!lastname) {
        alert("Name can't be blank");
        return false;
    }
    if (!Telephone) {
        alert("Telephone can't be blank.");
        return false;

    }


    if (!course) {
        alert("course can't be blank.");
        return false;
    }

     else if(!Age) {
        alert("Age can't be blank.");
        return false;

    }}




    text= prompt("please enter student or parents ")
    if (text === "students") {
      window.location.href = "file:///C:/Users/%E6%B1%AA%E5%AE%A1%E7%BF%94/Desktop/441/Wang%20Shenxiang%20(Owen)4.25ex6/pen-export-vYpwjrW/dist/index.html";
    }
    else if (text === "parents") {
      window.location.href = "file:///C:/Users/%E6%B1%AA%E5%AE%A1%E7%BF%94/Desktop/441/Wang%20Shenxiang%20(Owen)4.25ex6/pen-export-vYpwjrW/dist/About%20our%20page.html";
    }



function pushy(){
    var x = document.createElement("input");
    x.setAttribute("type", "text");
    x.setAttribute("name", "name[]");
    x.setAttribute("placeholder", "Name");
    var duh = document.getElementById("duh");
    duh.appendChild(x);
    duh.innerHTML = duh.innerHTML + "    ";
}

function pully(){
    var gone = document.getElementById("duh");
    gone.removeChild(gone.lastChild);
}

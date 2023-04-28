function addTask () {
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered 
    if (newTask != "") {
        
        var item = document.createElement("li");
       
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + newTask;

       
        document.getElementById("tasks").appendChild(item); 

        document.getElementById('input').value = "";
        document.getElementsById("input").placeholder="Add New Task";
       


    }
}

// change styling used for given item
function markDone (item) {
    item.className = 'finished';
}


function remove (item) {
    if(item.className == "finished"){
  
    item.remove()
}
}


function doAbout(divabout) {
    document.getElementById("divabout").innerHTML = "Author Is Chema!";
    document.getElementById("divabout").className = "aboutcolor";
    

}


function clearAbout() {
    document.getElementById("divabout").innerHTML = "";
    document.getElementById("divabout").className = "transparent";

}
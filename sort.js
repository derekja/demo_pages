function myclick() {
    
        var mytext = document.getElementById("test").value;
        var splittext = mytext.split(",");
        var sorttext = splittext.sort();
        console.log(sorttext);
        document.getElementById("out").innerHTML = sorttext;
    
    }
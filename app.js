function labStarter(){
    let searchBtn = document.getElementById("btn");
    var request;

    searchBtn.addEventListener("click", function(e){
        e.preventDefault()
        
        request = new XMLHttpRequest();
        
        //GET reuqest
        request.onreadystatechange = function(){
            if (request.readyState === XMLHttpRequest.DONE){
                if (request.status === 200){
                    alert(request.responseText)
                }
                else{
                    alert("Error fetching data!")
                }
            }
        };
        request.open("GET", "superheroes.php");
        request.send();

    })
}

window.onload = labStarter;
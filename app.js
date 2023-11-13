function labStarter(){
    let searchBtn = document.getElementById("btn");
    var request;

    //check type of data
    console.log(typeof(heroname));
    console.log(typeof(alias));
    console.log(typeof(biography));

    searchBtn.addEventListener("click", function(e){
        e.preventDefault()
        
        request = new XMLHttpRequest();
        // get user input
        let userInput = document.getElementById("hero-search").value;

        //add code to validate(sanitize the user input)
        
        //GET reuqest
        request.onreadystatechange = function(){
            if (request.readyState === XMLHttpRequest.DONE){
                if (request.status === 200){
                    //alert(request.responseText)
                    let response = JSON.parse(request.respnseText);

                    //display in result div
                    let resultContainer = document.getElementById("result");

                    //clear previous result
                    resultContainer.innerHTML= "";

                    //add code to check for error
                    
                }
                else{
                    //alert("Error fetching data!")
                    //handle error
                    document.getElementById("hero-search").innerHTML = "Error fecthing data!"

                }
            }
        };
        request.open("GET", "superheroes.php?query="+userInput);
        request.send();

    })
}

window.onload = labStarter;

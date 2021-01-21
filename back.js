var selectedbtn= document.querySelector("#btn-translator");

var textInputSelector= document.querySelector("#txt-input") ;

var textOutputSelector= document.querySelector("#txt-output") ;


var url = "https://api.funtranslations.com/translate/shakespeare.json";


function urlgen(text){
    return url+ "?"+"text="+text ;
 }

function errorHandler(error)
{
    console.log("some error occured",error);
    alert("error occured, try after some time") ;

}

function clickEventHandler(url){

    var textForTranslation= textInputSelector.value;
    var url= urlgen(textForTranslation);

    fetch(url)
     .then(response => response.json())
     .then(json => {
         textOutputSelector.innerHTML= json.contents.translated;
     }
     )
     .catch(errorHandler)


} 

selectedbtn.addEventListener("click",clickEventHandler);
let button = document.getElementById('Gönder')
let i = 0 ;

function Delete(clicked){
    console.log(clicked)
    let element = document.getElementsByClassName(clicked);
    console.log(element)
    element[0].remove();
}


button.addEventListener('click',
        function Compute(){
            i = i + 1 ;
            console.log(i)
            let text = document.getElementById('textinput')
            let email = document.getElementById('emailinput')
            let textarea = document.getElementById('textareainnput')
            let element = document.createElement("div");
            console.log(element)

            
            document.querySelector('.container').appendChild(element);
            element.innerHTML = "<div class='header-container'>" + "<div>" + "<h2> " + text.value + "</h2>" + "<h3>" + email.value + "</h3>" + "</div>" +  "<input type='button' class='Delete' value='Delete'   onclick='Delete(this.id)' />" + "</div>" + "<p>" + textarea.value + "</p>" +  "</div>"
            element.id = "container-per-comment";
            element.classList.add(i);

            let deletebtn =  document.querySelectorAll('.Delete')
            console.log(deletebtn)
            deletebtn[deletebtn.length-1].id = i;

            
        }
    )



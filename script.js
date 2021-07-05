let button = document.getElementById('Gönder')



button.addEventListener('click',
        function Compute(){
            let text = document.getElementById('textinput')
            let email = document.getElementById('emailinput')
            let textarea = document.getElementById('textareainnput')
            let element = document.createElement("div");
            console.log(element)
            
            document.querySelector('.container').appendChild(element);
            element.innerHTML = '<h2>' + text.value +'</h2>' + '<h3>' + email.value + '</h3>' + '<p>'+ textarea.value + '</p>'
            element.classList.add("comment");
            
        }
    )
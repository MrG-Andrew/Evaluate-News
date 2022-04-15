export function formSubmit(e) {
    e.preventDefault();
    
    const inputElement = document.getElementById("urlInput");
    const btnElement = document.getElementById("btn");
    const urlText = inputElement.value;
    const resultsElement = document.getElementById("results");

    console.log("Clicked")
    const regexMatch = urlText.match(/http(s?)(:\/\/)((www\.)?)([a-zA-z0-9\-_]+)(\.(\w){3})((\/[a-zA-z0-9\-_]+)+)?/gim);

    if(regexMatch != null){
        if (regexMatch[0] == urlText){
            Client.postReq(inputElement.value);
        }else{
            inputElement.style.borderBottom = "6px solid red";
            btnElement.disabled = false;
            resultsElement.innerHTML = `<span style="color:red;">pls enter a valid article url</span>`;

        }
    }else{
        inputElement.style.borderBottom = "6px solid red";
        btnElement.disabled = false;
        resultsElement.innerHTML = `<span style="color:red;">pls enter a url</span>`;

    }
}



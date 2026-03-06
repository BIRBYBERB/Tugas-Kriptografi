function caesarCipher(text, key, decrypt=false) {

    if(decrypt){
        key = -key
    }

    let result = ""

    for(let i=0;i<text.length;i++){

        let char = text[i]

        if(char.match(/[a-z]/i)){

            let code = text.charCodeAt(i)

            if(code >= 65 && code <= 90){
                char = String.fromCharCode((code - 65 + key + 26) % 26 + 65)
            }

            else if(code >= 97 && code <= 122){
                char = String.fromCharCode((code - 97 + key + 26) % 26 + 97)
            }
        }

        result += char
    }

    return result
}

function encrypt(){

    let text = document.getElementById("text").value
    let key = parseInt(document.getElementById("key").value)

    let result = caesarCipher(text,key,false)

    document.getElementById("result").innerText = result
}

function decrypt(){

    let text = document.getElementById("text").value
    let key = parseInt(document.getElementById("key").value)

    let result = caesarCipher(text,key,true)

    document.getElementById("result").innerText = result
}
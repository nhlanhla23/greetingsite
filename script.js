function submitForm() {
    const nameInput = document.getElementById('name').value;
    const languageInput = document.getElementById('language').value;
    let greeting = '';

    if (languageInput.toLowerCase() === 'sepedi') {
        greeting = 'Thobela ' + nameInput;
    } else if (languageInput.toLowerCase() === 'zulu') {
        greeting = 'Sawubona ' + nameInput;
    } else if (languageInput.toLowerCase() === 'xhosa') {
        greeting = 'Molo ' + nameInput;
    } else if(languageInput.toLowerCase() === 'afrikaans') {
        greeting = 'Hallo ' + nameInput;
    } else if (languageInput.toLowerCase() === 'sesotho') {
        greeting = 'Dumela ' + nameInput;
    } else if (languageInput.toLowerCase() === 'tswana') {
        greeting = 'Dumela ' + nameInput;
    } else if (languageInput.toLowerCase() === 'tshivenda') {
        greeting = 'Ndaa ' + nameInput;
    } else if (languageInput.toLowerCase() === 'tsonga') {
        greeting = 'Avuxeni ' + nameInput;
    } else if (languageInput.toLowerCase() === 'siswati') {
        greeting = 'Sawubona ' + nameInput;
    } else {
        greeting ='Hello' + nameInput;
    }
 
    

    document.getElementById('greeting').innerText = greeting;
}



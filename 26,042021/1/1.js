const form = document.getElementsByTagName("form")[0];
inputs = form.getElementsByTagName("input");
form.addEventListener("submit", e => {
    e.preventDefault();
    for (let i = 0; i < inputs.length; i++) {
        const elem = inputs[i];
        if (elem.value === "") {
            alert(`Wprowadź ${elem.name}!`);
            elem.focus();
        }
    }
});
function extractText() {
    let ul = document.getElementById("items");
    let liItems = ul.getElementsByTagName("li");
    let textarea = document.getElementById("result");

    for (let i = 0; i < liItems.length; i++) {
        if (i === liItems.length - 1) {
            textarea.value += liItems[i].textContent;
        } else {
            textarea.value += liItems[i].textContent + "\n";
        }
    }
}
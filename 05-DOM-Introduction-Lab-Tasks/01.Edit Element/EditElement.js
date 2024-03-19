function editElement(element, match, replacer) {
    let parts = element.textContent.split(match);
    let newText = parts.join(replacer);
    element.textContent = newText;
}
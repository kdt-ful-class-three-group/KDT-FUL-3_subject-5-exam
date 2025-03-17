export function deactivateClickedDiv(id, list) {
    Array.from(list).forEach(div => {
        if (div.getAttribute('id') === id) {
            div.style.pointerEvents = 'none';
            div.style.color = 'red';
        }
    });
}



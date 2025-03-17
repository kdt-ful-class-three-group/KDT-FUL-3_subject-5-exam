export function autoRender(obj) {
    for (const [key, value] of Object.entries(obj)) {
        const el = document.getElementById(key);
        if (el) {
            if (Array.isArray(value)) {
                el.innerHTML = value.join(', ');
            } else if (typeof value === 'object') {
                autoRender(value);
            } else {
                el.innerText = value;
            }
        }
    }
}
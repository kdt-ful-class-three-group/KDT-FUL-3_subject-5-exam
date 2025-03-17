import { deactivateClickedDiv } from "./deactiveClickedDiv.js";

let clickData = [];
let finalClick = [];

const list = document.getElementById('list').children;

export function commitClickData() {
    const data = clickData.length > 0 ? clickData[0] : { id: 'ban', name: 'ban' };
    finalClick.push(data);

    if (clickData.length > 0) {
        const id = clickData[0].id;
        deactivateClickedDiv(id, list);
        clickData = [];
    }
}

window.commitClickData = commitClickData;
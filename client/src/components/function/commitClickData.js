import { deactivateClickedDiv } from "./deactivateClickedDiv.js";

export function commitClickData(list, clickData, finalClick) {
  const data = clickData || { id: 'ban', name: 'ban' };
  finalClick.push(data);

  if (clickData.length >0) {
    const id = clickData[0].id;
    deactivateClickedDiv(id,list);
    clickData = [];
  }
}
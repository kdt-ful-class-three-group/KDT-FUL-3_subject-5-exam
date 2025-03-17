import {CHAMPOBJ} from "../../obj/CHAMPOBJ_hyunjoon.js";



let finalClick = [];

export function saveFinalBanData() {
    CHAMPOBJ.banPickData.blue.ban = finalClick.filter((_, i) => i % 2 === 0);
    CHAMPOBJ.banPickData.red.ban = finalClick.filter((_, i) => i % 2 !== 0);
}


export const CHAMPOBJ = {
  banPickData: {
    blue: { ban: [], pick: [] },
    red: { ban: [], pick: [] },
  },
  count: {
    blue: 0,
    red: 0,
    get all() {
      return this.blue + this.red;
    },
    total: 0,
  },
  dataArray: {
    clickData: [],
    finalClick: []
  }
  ,
  noneClick: { id: "ban", name: "ban" },
  time: {
    second: 30,
    intervalTime: 1000,
    intervalName: "",
  },
  ELEMENT: {
    blueDiv: document.getElementById('blueBan'),
    redDiv: document.getElementById('redBan'),
    bluePickDiv: document.querySelectorAll('#bluePick > div'),
    redPickDiv: document.querySelectorAll('#redPick > div'),
    list: document.querySelectorAll('#list > div'),
    pickBtn: document.getElementById('pickBtn'),
    restartBtn: document.getElementById('restart'),
    banBtn : document.getElementById('banBtn')
  }
};

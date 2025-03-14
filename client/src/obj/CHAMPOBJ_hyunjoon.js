export const CHAMPOBJ = {
  banPickData : { 
    blue: { ban: [], pick: [] }, 
    red: { ban: [], pick: [] } 
  },
  count : {
    blue:0,
    red:0,
    get all(){
      return this.blue+this.red
    },
    total:0
  },
  clickLiveData : [],
  finalClickData : [],
  noneClick: {id:'ban',name:'ban'}
}
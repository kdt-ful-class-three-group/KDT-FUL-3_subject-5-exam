  // 원본 API에서 한글 이름 가져오기
  function korNameGet(apiData) {
    let champKorName = [];
    // 원본 데이터에서 한글 이름을 가져옴
    for (let index = 0; index < apiData.length; index++) {
      champKorName.push(apiData[index].name);
    }
    console.log(champKorName);
    return champKorName;
  }
  export default korNameGet;
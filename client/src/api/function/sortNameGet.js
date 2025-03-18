// 정렬한 이름 가져오기
function sortNameGet(champKorName, apiData) {
    let champCombine = [];
  
    // champCombine 담겨질 배열 index를 증가
    for (let outerIndex = 0; outerIndex < apiData.length; outerIndex++) {
      // 전체 챔피언 하나하나씩 비교
      for (let innerIndex = 0; innerIndex < apiData.length; innerIndex++) {
        // 가, 나, 다 정렬된 한글이름과 API의 한글 이름과 같으면 실행
        if (champKorName.sort()[outerIndex] === apiData[innerIndex].name) {
          // 한글 이름과 영어 이름을 객체로 삽입 name : 한글이름, id : 영어 이름
          champCombine.push({
            korName: apiData[innerIndex].name,
            engName: apiData[innerIndex].id,
          });
        }
      }
    }
    return champCombine;
  }

  export default sortNameGet;
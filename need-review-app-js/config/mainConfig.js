/**
 * @description 메인 라우트 및 파일 처리 관련 설정
 */
export const mainRouteConfig = {
  files: {
    banpick: 'banpick.json',
    index: 'index.html'
  },
  encoding: 'utf-8',
  jsonFormat: {
    space: 2
  }
};

/**
 * @description API 관련 설정
 */
export const apiConfig = {
  champion: {
    baseUrl: 'https://ddragon.leagueoflegends.com/cdn',
    version: '15.5.1',
    locale: 'ko_KR',
    endpoints: {
      data: '/data/',
      images: '/img/champion/splash/'
    }
  }
}; 
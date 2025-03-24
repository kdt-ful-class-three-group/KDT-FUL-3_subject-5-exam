import fs from 'fs';
import { mainRouteConfig } from '../config/mainConfig.js';

/**
 * @description banpick.json 파일 처리를 위한 유틸리티 함수
 * @param {Object} data - 저장할 데이터 객체
 * @param {'read' | 'write' | 'append'} operation - 수행할 작업 유형
 * @returns {Object | void} read 작업시 파일 내용 반환, 다른 작업은 void
 */
export const handleBanPickFile = (data = null, operation = 'read') => {
  const { files, encoding, jsonFormat } = mainRouteConfig;
  
  switch (operation) {
    case 'read':
      if (fs.existsSync(files.banpick)) {
        return JSON.parse(fs.readFileSync(files.banpick, encoding));
      }
      return [];
      
    case 'write':
      fs.writeFileSync(
        files.banpick,
        JSON.stringify(data, null, jsonFormat.space),
        encoding
      );
      break;
      
    case 'append':
      const existingData = handleBanPickFile(null, 'read');
      existingData.push(data);
      handleBanPickFile(existingData, 'write');
      break;
  }
}; 
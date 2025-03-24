import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { apiConfig } from '../config/mainConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @description 챔피언 이미지 다운로드 함수
 * @param {string} imageName - 챔피언 이름
 */
export const downloadImage = async (imageName) => {
  const { baseUrl, endpoints } = apiConfig.champion;
  const imageUrl = `${baseUrl}${endpoints.images}${imageName}_0.jpg`;
  const imageDir = path.join(__dirname, '../../client/public/images');
  const imagePath = path.join(imageDir, `${imageName}.jpg`);

  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
  } else if (fs.existsSync(imagePath)) {
    return;
  }

  try {
    const imageDownload = await axios({
      url: imageUrl,
      method: 'GET',
      responseType: 'stream'
    });

    imageDownload.data.pipe(fs.createWriteStream(imagePath));

    imageDownload.data.on('end', () => {
      console.log(`이미지 ${imageName} 다운로드 성공!`);
    });

    imageDownload.data.on('error', (err) => {
      console.error(`이미지 ${imageName} 다운로드 실패: ${err.message}`);
    });
  } catch (error) {
    console.error(`이미지 ${imageName} 다운로드 실패: ${error.message}`);
  }
};

/**
 * @description 챔피언 데이터 조회 및 이미지 다운로드
 */
export const fetchChampionData = async () => {
  const { baseUrl, version, locale, endpoints } = apiConfig.champion;
  const championUrl = `${baseUrl}/${version}${endpoints.data}${locale}/champion.json`;

  try {
    const response = await axios({
      url: championUrl,
      method: 'GET',
      responseType: 'json'
    });
    
    const championData = response.data.data;
    Object.keys(championData).map(downloadImage);
    console.log('챔피언 데이터 요청 성공');
  } catch (error) {
    console.error(`챔피언 데이터 요청 실패: ${error.message}`);
  }
}; 
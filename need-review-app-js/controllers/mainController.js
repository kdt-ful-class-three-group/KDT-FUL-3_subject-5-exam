import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { mainRouteConfig } from '../config/mainConfig.js';
import { handleBanPickFile } from '../utils/fileHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 초기 데이터
let firstData = [];

/**
 * @description 메인 페이지 컨트롤러
 * @param {express.Request} req - Express 요청 객체
 * @param {express.Response} res - Express 응답 객체
 */
export const mainController = (req, res) => {
  if (!fs.existsSync(mainRouteConfig.files.banpick)) {
    handleBanPickFile(firstData, 'write');
  }
  res.sendFile(path.join(__dirname, '../../', mainRouteConfig.files.index));
};

/**
 * @description 밴픽 데이터 저장 컨트롤러
 * @param {express.Request} req - Express 요청 객체
 * @param {express.Response} res - Express 응답 객체
 */
export const saveController = (req, res) => {
  const banPickData = req.body;
  
  if (fs.existsSync(mainRouteConfig.files.banpick)) {
    handleBanPickFile(banPickData, 'append');
  }
  
  res.json({ message: "데이터 저장 성공!" });
}; 
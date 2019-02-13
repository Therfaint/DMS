/**
 * Created by therfaint- on 22/12/2018.
 */
import fs from 'fs';

/**
 * 读取文件
 * @param filePath 文件路径
 * @returns {Promise}
 */
export const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

/**
 * 创建目录
 * @param base 基础路径
 * @param dirname 目录名称
 * @returns {Promise}
 */
export const mkdirSync = (base, dirname) => {
  const absolutePath = `${base}/${dirname}`;
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(`${absolutePath}`)) {
      fs.mkdirSync(`${absolutePath}`);
      resolve(true);
    } else {
      reject(false);
    }
  });
};

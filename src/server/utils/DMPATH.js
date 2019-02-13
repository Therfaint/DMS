/**
 * Created by therfaint- on 22/12/2018.
 */
import path from 'path';

export const pathJoin = function(filePaths) {
  path.join.apply(__dirname, [...filePaths])
};

export const pathResolve = function(filePath){
  return path.resolve.call(__dirname, `${filePath}`)
};

import {toLowerCaseNonAccentVietnamese} from './helper';

/**
 * 
 * Thêm phần tử vào mảng
 * 
 * @param {*} data 
 * @param {*} item 
 * @returns 
 */
 export function pushDataToArray(data, item) {
  return data = [...data, item];
}

/**
 * 
 * Cập nhật object trong mảng
 * 
 * @param {*} data 
 * @param {*} payload 
 * @returns 
 */
 export function updateArrayObject(data, payload, key = 'id') {
  data = [...data];
  data.splice(
    data.findIndex((item) => item.id === payload[key]),
    1,
    payload,
  );
  return data;
}

/**
 * Xóa 1 object từ mảng
 * 
 * @param {*} array 
 * @param {*} key 
 * @returns 
 */
 export function removeItemInArray(array, payload, key = 'id') {
  //return array.splice(array.findIndex((item) => item[key] === payload[key]), 1);
  return [...array].filter((item) => item[key] !== payload[key]);
}

/**
 * 
 * Filter array list object by keyword
 * 
 * @param {*} data 
 * @param {*} keyword 
 * @param {*} value 
 * @returns 
 */
 export function searchByKeyword(data, keyword = '', keysearch = 'name') {
  data = [...data];
  if (keyword) {
    data = data.filter((item) => {
      if (toLowerCaseNonAccentVietnamese(item[keysearch]).indexOf(toLowerCaseNonAccentVietnamese(keyword)) > -1) {
        return item;
      }
    });
    return data;
  }
  return data;
}

/**
 * 
 * Tìm 1 object trong array object
 * 
 * @param {*} aryData 
 * @param {*} key 
 * @param {*} value 
 * @returns 
 */
 export function findInArray(aryData, key = '', value = '') {
  if(!key || !value) {
    return null;
  }
  return aryData.find(item => item[key] === value);
}
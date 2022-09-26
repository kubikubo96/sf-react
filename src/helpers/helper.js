
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
export function updateArrayObject(data, payload, value = 'id') {
  data = [...data];
  data.splice(
    data.findIndex((item) => item.id === payload[value]),
    1,
    payload,
  );
  return data;
}

/**
 * Check isObject
 * 
 * @param {*} val 
 * @returns 
 */
 export function isObject(val) {
  if (val === null) { return false;}
  return ( (typeof val === 'function') || (typeof val === 'object') );
}

/**
 * Remove invalid (not equal true) elements from array or object
 * 
 * @param {*} data 
 * @returns 
 */
 export function cleanData(data) {

  if(Array.isArray(data)) {
    let arrData = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i]) {
        arrData.push(data[i]);
      }
    }
    return arrData;
    
  } else if(isObject(data)) {
    Object.keys(data).forEach(key => {
      if (!data[key]) {
        delete data[key];
      }
    });
    return data;
  }
  return data;
}

/**
 * Format money vietnams
 * 
 * @param {*} n 
 * @returns 
 */
 export function formatMoney(number) {
  number = number.replace(/\D/g, '');
  new Intl.NumberFormat('VI-vi', {maximumSignificantDigits: 3}).format(number);
}

/**
 * 
 * Convert data money for input text
 * 
 * @param {*} price 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
export function dataInputMoney(price, min = 0, max = 100000000) {

  let data = { number: 0, money: 0};

  let numberPrice = price.replace(/\D/g, '');
  data.number = numberPrice ? parseInt(numberPrice) : 0;

  if (data.number < min) {
    data.number = numberPrice = min;
    data.money = data.number;
  }
  if (data.number > max) {
    data.number = numberPrice = max;
    data.money = data.number;
  }

  data.money = new Intl.NumberFormat('VI-vi', {maximumSignificantDigits: 3}).format(numberPrice);
  return data;
}

/**
 * This function converts the string to lowercase, then perform the conversion
 * 
 * @param {*} str 
 * @returns 
 */
export function toLowerCaseNonAccentVietnamese(str) {
  str = str.toLowerCase();
//     We can also use this instead of from line 11 to line 17
//     str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
//     str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
//     str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
//     str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
//     str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
//     str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
//     str = str.replace(/\u0111/g, "d");
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
}

/**
 * This function keeps the casing unchanged for str, then perform the conversion
 * 
 * @param {*} str 
 * @returns 
 */
export function toNonAccentVietnamese(str) {
  str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
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
export function filterArrayObjectByKey(data, keyword = '', value = 'name') {
  data = [...data];
  if (keyword) {
    data = data.filter((item) => {
      if (toLowerCaseNonAccentVietnamese(item[value]).indexOf(toLowerCaseNonAccentVietnamese(keyword)) > -1) {
        return item;
      }
    });
    return data;
  }
  return data;
}
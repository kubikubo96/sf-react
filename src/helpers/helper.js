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
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
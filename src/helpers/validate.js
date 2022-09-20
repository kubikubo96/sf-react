/**
 * Validate a valid URL
 * @param {String} textval
 * @return {Boolean}
 */
 export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
}

/**
 * Check if a string contains only alphabet
 * @param {String} str
 * @param {Boolean}
 */
 export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
 * Validate an email address
 * @param {String} email
 * @return {Boolean}
 */
export function validEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
 * Validate an phone number vietnam
 * @param {String} phone 
 * @returns {Boolean}
 */
 export function validPhoneVietNam(phone) {
  const reg = /((^(\+84|84|0|0084|\(\+84\)|\+\(84\)|){1})(3|5|7|8|9))+([0-9]{8})$/;
  return reg.test(phone);
}

/**
 * Validate an phone number singapore
 * @param {String} phone 
 * @returns {Boolean}
 */
 export function validPhoneSingapore(phone) {
  const reg = /((^(\+0065|0065|\+65|65|\(\+0065\)|\+\(0065\)|\(\+65\)|\+\(65\)|){1})(-))+([0-9]{8,12})$/;
  return reg.test(phone);
}
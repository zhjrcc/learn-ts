// @ts-check
let a = 1
a = "hello"
console.log(a)

/** @type {number} */
let num
num = "2"

/**
 * 增值税
 * @param {number} price
 * @param {number} vat
 * @returns {number}
 */
function addVAT(price, vat = 0.2) {
  return price * (1 + vat)
}
/**
 * @typedef {Object} Article
 * @property {number} price
 * @property {number} vat
 * @property {string} string
 * @property {boolean} sold
 */

/**
 * @param {[Article]} articles
 */
function totalAmout(articles) {
  return articles.reduce((total, article) => {
    return total + addVAT(article.price, article.vat)
  }, 0)
}

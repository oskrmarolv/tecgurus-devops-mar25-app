// framework/helpers/token.helper.js


function token(len) {
  return `${Date.now()}`;
}

function sum(a, b) {
  return a + b;
}

module.exports = {
  sum,
  token
};
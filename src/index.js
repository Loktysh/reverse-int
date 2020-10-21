module.exports = function reverse (n) {
    return n = n.toString().split('').reverse().join('').replace(/^0+/, '').split('').map((b) => Number.isInteger(parseInt(b)) ? parseInt(b) : '').join('');
    ;
}

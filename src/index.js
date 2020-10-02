
exports.min = function min (array) {
  return (array && array.length) ? array.sort((a,b)=>(a-b)).reverse().pop(0) : 0;
}

exports.max = function max (array) {
  return (array && array.length) ? array && array.sort((a,b)=>(a-b)).pop(0) : 0;
}

exports.avg = function avg (array) {
  return (array && array.length) ? array.reduce((a,b)=>(a+b))/array.length : 0;
}


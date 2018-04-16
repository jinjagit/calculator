

function round(number, precision) {
  var shift = function (number, precision, reverseShift) {
    if (reverseShift) {
      precision = -precision;
    }
    var numArray = ("" + number).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
  };
  return shift(Math.round(shift(number, precision, false)), precision, true);
}

var evaluate = function (history) {
  // Number.parseFloat(100).toExponential(2); "1.00e+2"

  return history;
}


module.exports = {
	evaluate
}

//const assert = require('assert');
  var countAllPaarl = function(regList){
    var regNum = regList.split(", ");

      var countPaarl = [];
        for(var i=0; i<regNum.length; i++){

if (regNum[i].startsWith('CJ')){
    countPaarl.push(regNum[i]);
}
  }
  //console.log(countPaarl.length);
    return countPaarl.length;
};
  

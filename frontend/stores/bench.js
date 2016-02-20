var Store = require('flux/utils').Store;
var appDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/benchConstants');


var _benches = {};
var BenchStore = new Store(appDispatcher);


var resetBenches = function(benches) {
  _benches = benches;
};

BenchStore.all = function(){

  var arrOfBenches = Object.keys(_benches).map(function(benchId) {
    return _benches[benchId];
  });
  return arrOfBenches;

};

BenchStore.__onDispatch = function(payload) {
switch(payload.actionType) {
  case BenchConstants.BENCHES_RECEIVED:
    resetBenches(payload.benches);
    BenchStore.__emitChange();
    break;
}};






window.BenchStore = BenchStore;
module.exports = BenchStore;

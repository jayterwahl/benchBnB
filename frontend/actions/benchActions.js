var Dispatcher = require("../dispatcher/dispatcher");
var benchConstants = require('../constants/benchConstants');

var benchActions = {

  receiveAllBenches: function(benches){
    Dispatcher.dispatch({
      actionType: benchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },
  receiveSingleBench: function(bench){
    Dispatcher.dispatch({
      actionType: benchConstants.SINGLE_BENCH_RECEIVED,
      singleBench : bench
    });
  },

  createBench: function(benchObject){
    Dispatcher.dispatch({
      actionType: benchConstants.MAKE_NEW_BENCH,
      createdBench: benchObject

    });
  }

};

module.exports = benchActions;

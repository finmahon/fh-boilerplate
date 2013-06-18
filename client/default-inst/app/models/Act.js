/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['app/models/Act.js']) {
  _$jscoverage['app/models/Act.js'] = [];
  _$jscoverage['app/models/Act.js'][7] = 0;
  _$jscoverage['app/models/Act.js'][10] = 0;
  _$jscoverage['app/models/Act.js'][22] = 0;
  _$jscoverage['app/models/Act.js'][23] = 0;
  _$jscoverage['app/models/Act.js'][25] = 0;
  _$jscoverage['app/models/Act.js'][28] = 0;
  _$jscoverage['app/models/Act.js'][29] = 0;
  _$jscoverage['app/models/Act.js'][30] = 0;
  _$jscoverage['app/models/Act.js'][34] = 0;
  _$jscoverage['app/models/Act.js'][36] = 0;
  _$jscoverage['app/models/Act.js'][40] = 0;
}
_$jscoverage['app/models/Act.js'][7]++;
var Act = (function (module) {
  _$jscoverage['app/models/Act.js'][10]++;
  module.call = call;
  _$jscoverage['app/models/Act.js'][22]++;
  function call(func, params, successFn, failFn) {
    _$jscoverage['app/models/Act.js'][23]++;
    if (! func || ! successFn || ! failFn) {
      _$jscoverage['app/models/Act.js'][25]++;
      return false;
    }
    _$jscoverage['app/models/Act.js'][28]++;
    params = params || {};
    _$jscoverage['app/models/Act.js'][29]++;
    log("hello");
    _$jscoverage['app/models/Act.js'][30]++;
    $fh.act({"act": func, "req": params}, (function (res) {
  _$jscoverage['app/models/Act.js'][34]++;
  return successFn(res);
}), (function (err, msg) {
  _$jscoverage['app/models/Act.js'][36]++;
  return failFn(err, msg);
}));
}
  _$jscoverage['app/models/Act.js'][40]++;
  return module;
})(Act || {});
_$jscoverage['app/models/Act.js'].source = ["/*--------------------","\tapp/models/Act","","\tModule used to build the act calls used throughout the app","--------------------*/","","var Act = (function(module) {","\t//interface----------------------------------","","\t\tmodule.call = call; // make act call to cloud","","\t//implementation-------------------------------","","\t/*","\t * Act Call Function","\t *","\t* @func String\t\t\t- act name","\t* @params Obj\t\t\t- params object","\t* @successFn function\t- success callback","\t* @failFn function\t\t- failure callback","\t */","\tfunction call(func, params, successFn, failFn){","\t\tif(!func || !successFn || !failFn){","\t\t\t// console.log('missing act name or callbacks');","\t\t\treturn false;","\t\t}","","\t\tparams = params || {};","\t\tlog('hello');","\t\t$fh.act({","\t\t\t'act' : func,","\t\t\t'req' : params","\t\t}, function(res){","\t\t\treturn successFn(res);","\t\t}, function(err, msg){","\t\t\treturn failFn(err, msg);","\t\t});","\t}","","\treturn module;","","\t// Sample act call ","/*","\tAct.call(\"getConfig\", {param1: true},","\t\tfunction(res){","\t\t\tconsole.log(res);","\t\t}, function(msg, err){","\t\t\tconsole.log(\"Act Error:\", msg);","\t\t}","\t);","*/","","})(Act || {});","","","","","",""];

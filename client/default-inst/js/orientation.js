/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['js/orientation.js']) {
  _$jscoverage['js/orientation.js'] = [];
  _$jscoverage['js/orientation.js'][5] = 0;
  _$jscoverage['js/orientation.js'][6] = 0;
  _$jscoverage['js/orientation.js'][8] = 0;
  _$jscoverage['js/orientation.js'][12] = 0;
  _$jscoverage['js/orientation.js'][16] = 0;
  _$jscoverage['js/orientation.js'][17] = 0;
  _$jscoverage['js/orientation.js'][21] = 0;
}
_$jscoverage['js/orientation.js'][5]++;
initOriHandler = (function () {
  _$jscoverage['js/orientation.js'][6]++;
  $(window).bind("orientationchange", (function (e) {
  _$jscoverage['js/orientation.js'][8]++;
  switch (window.orientation) {
  case 0:
    _$jscoverage['js/orientation.js'][12]++;
    break;
  case 90:
    _$jscoverage['js/orientation.js'][16]++;
    alert("turn your phone around!");
    _$jscoverage['js/orientation.js'][17]++;
    break;
  case -90:
    _$jscoverage['js/orientation.js'][21]++;
    break;
  }
}));
});
_$jscoverage['js/orientation.js'].source = ["/*"," * Handle Orientation change on device"," */","","initOriHandler = function(){","\t$(window).bind('orientationchange', function(e) {","","\tswitch (window.orientation) {","","\t\tcase 0:","\t\t\t// portrait mode","\t\tbreak;","","\t\tcase 90:","\t\t\t// landscape left","\t\t\talert('turn your phone around!');","\t\tbreak;","","\t\tcase -90:","\t\t\t// landscape right","\t\tbreak;","","\t\t}","","\t});","};"];

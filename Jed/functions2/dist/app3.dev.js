"use strict";

var makeFormalFactory = function makeFormalFactory(cins) {
  if (cins === 'K') return function (name) {
    return "Hi, mr ".concat(name);
  };else if (cins === 'Q') return function (name) {
    return "hi, ms ".concat(name);
  };
};

var forMan = makeFormalFactory('K');
var forWoman = makeFormalFactory('Q');
forMan('aga');
forWoman('leman');
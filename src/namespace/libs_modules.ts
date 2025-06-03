import _ from "lodash";

_.mul = function (arr: number[]): number {
  return arr.reduce((total, value) => total * value, 1);
};

global.MYGLOBAL = "Hello World!";

export default _;
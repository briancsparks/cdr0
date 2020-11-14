
const _                       = require('underscore');
let   isnt;
let   anyIsnt;

/**
 *  Returns `true` if the item is one of the things in JavaScript that cannot
 *  be manipulated (`null`, `undefined`, `NaN`).
 *
 * @param {*} x
 * @returns true or false
 */
isnt = module.exports.isnt = function(x) {
  return _.isNull(x) || _.isUndefined(x) || _.isNaN(x);
};

/**
 *  Returns true if any of the items in `argv` isnt().
 *
 */
anyIsnt = module.exports.anyIsnt = function(argv) {
  return _.reduce(argv, (m, arg) => {
    if (m !== false) { return m; }
    return isnt(arg);
  }, false);
};



/**
 *  Is the parameter strictly an Object (and not an Array, or Date, or ...).
 */
const isObject = module.exports.isObject = function(x) {
  if (!_.isObject(x))                     { return false; }
  if (_.isArray(x)    || _.isDate(x))     { return false; }
  if (_.isFunction(x) || _.isRegExp(x))   { return false; }

  return !_.isError(x);
};

/**
 *  Makes x the right type.
 */
const smartValue = module.exports.smartValue = function(value) {
  if (_.isString(value)) {
    if (value === 'true')       { return true; }
    if (value === 'false')      { return false; }
    if (value === 'null')       { return null; }

    if (/^[0-9]+$/.exec(value)) { return parseInt(value, 10); }

    // 2018-12-31T10:08:56.016Z
    if (value.length >= 24 && value[10] === 'T') {
      if (value.match(/\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\d/)) {
        return new Date(value);
      }
    }

    if (/^[0-9]+[.]([0-9]+)?$/.exec(value))   { return +value; }
    if (/^[.][0-9]+$/.exec(value))            { return +value; }
  }

  return value;
};

/**
 * Makes each attribute on obj the right type.
 */
const smartAttrs = module.exports.smartAttrs = function(obj) {
  return _.reduce(obj, function(m, value, key) {
    if (isnt(value) || isnt(key) || key === '')   { return m; }

    return {...m, [key]:smartValue(value)};
    // return sg.kv(m, key, smartValue(value));
  }, {});
};




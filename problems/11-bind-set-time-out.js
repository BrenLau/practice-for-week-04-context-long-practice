function boundFuncTimer(obj, func, delay) {
  obj.func = func
  setTimeout(func.bind(obj), delay)
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;

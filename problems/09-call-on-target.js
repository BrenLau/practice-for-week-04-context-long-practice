function callOnTarget(func, obj1, obj2) {
  obj1.func = func

  return obj1.func(obj2)
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;

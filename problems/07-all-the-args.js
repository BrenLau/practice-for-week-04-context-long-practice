function allTheArgs(func, ...args) {
  console.log(func.apply(func, args))
  let hello = func.apply(func, args)
  return hello
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;

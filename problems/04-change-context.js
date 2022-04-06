function changeContext(func, obj) {
  obj.func = func;
  return (obj.func())

}
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;

/**
 * TODO
 * @param {Jquery.Element} element
 * @param {string} strClass
 */
const prependClass = (element, strClass) => {
  let classes = element.attr('class');
  classes = `${strClass} ${classes}`;
  element.attr('class', classes);
};

/**
 * TODO
 * @param {Jquery.Element} element
 * @param {string} strClass
 * @param {boolean} prepend
 */
const addClassUniquely = (element, strClass, prepend) => {
  const classes = element.attr('class');
  const allClasses = classes.split(' ');
  const classExists = allClasses.some(className => className === strClass).length > 0;

  if (!classExists) {
    if (prepend) {
      prependClass(element, strClass);
    } else {
      element.addClass(strClass);
    }
  }
};

// TODO: localize
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default { prependClass, addClassUniquely, days };

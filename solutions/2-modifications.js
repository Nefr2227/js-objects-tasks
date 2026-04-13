import _ from 'lodash';

// BEGIN
const normal = (lesson) => {
  if (lesson.name) {
    lesson.name = lesson.name[0].toUpperCase() + lesson.name.slice(1).toLowerCase();
  }
  if (lesson.description) {
    lesson.description = lesson.description.toLowerCase();
  }
}

export default normal;
// END
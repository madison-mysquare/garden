console.log('logger is loaded');
const checkName = (firstName, lastName) => {
  if (firstName !== 'Jim' || lastName !== 'Kim') {
    console.log('you are not Jim Kim');

  } else {
    console.log('you are Jim Kim');
  }
};
checkName('Jim', 'Lee');

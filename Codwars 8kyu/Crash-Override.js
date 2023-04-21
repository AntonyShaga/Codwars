// My Solution
function aliasGen(fname, lname) {
  let output = "";

  fname = fname.toUpperCase();
  lname = lname.toUpperCase();

  let firstLetter = fname[0];

  let secondLetter = lname[0];

  let regexTest = new RegExp('[A-Z]');

  if (
    ! regexTest.test(firstLetter)
    ||
    ! regexTest.test(secondLetter)
  ) {
    return "Your name must start with a letter from A - Z.";
  }
  
  output = `${firstName[firstLetter]} ${surname[secondLetter]}`;
return output;
}

//Best Practices

const initialCap = (str) => str[0].toUpperCase();
const isValidName = (name) => /^[a-z]/i.test(name);
const aliasGen = (fName, lName) => {
  return (isValidName(fName) && isValidName(lName))
    ? `${ firstName[initialCap(fName)] } ${ surname[initialCap(lName)] }`
    : 'Your name must start with a letter from A - Z.';
}
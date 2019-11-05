const stateEnums = ['NSW', 'VIC', 'TAS', 'QLD', 'WA', 'NT', 'SA'];

// what state of Australia did the user enter a postcode for
/**
 *
 * @param {postCode} postCode : integer
 * @returns a string value, state
 * EXAMPLE return stateEnums[0] = "NSW"
 */
export const getStateFromPostCode = postCode => {
  //
  // States

  // edge case
  // negative numbers don't get passed into this function
  // number is  greater than max range value
  if (postCode > 8000) {
    return null;
  }
  //NT
  if (postCode > 0 && postCode < 1000) {
    console.log(`Postcode entered: ${postCode}`);
    console.log(`State selected is: ${stateEnums[5]}`);
    return stateEnums[5];
  }
  // NSW
  if (postCode >= 2000 && postCode < 3000) {
    console.log(`Postcode entered: ${postCode}`);
    console.log(`State selected is: ${stateEnums[0]}`);
    return stateEnums[0];
  }
  // VIC
  if (postCode >= 3000 && postCode < 4000) {
    console.log(`Postcode entered: ${postCode}`);
    console.log(`State selected is: ${stateEnums[1]}`);
    return stateEnums[1];
  }
  //QLD
  if (postCode >= 4000 && postCode < 5000) {
    console.log(`Postcode entered: ${postCode}`);
    console.log(`State selected is: ${stateEnums[3]}`);
    return stateEnums[3];
  }
  // SA
  if (postCode >= 5000 && postCode < 6000) {
    console.log(`Postcode entered: ${postCode}`);
    console.log(`State selected is: ${stateEnums[6]}`);
    return stateEnums[6];
  }
  // WA
  if (postCode >= 6000 && postCode < 7000) {
    console.log(`Postcode entered: ${postCode}`);
    console.log(`State selected is: ${stateEnums[4]}`);
    return stateEnums[4];
  }
  // TAS
  if (postCode >= 7000 && postCode < 8000) {
    console.log(`Postcode entered: ${postCode}`);
    console.log(`State selected is: ${stateEnums[2]}`);
    return stateEnums[2];
  }
};

// was a state selected?
/**
 *
 * @param {str} str a string the user entered in context of searching by state
 * returns a positive number if a match is found
 * returns a negative number if no match is made
 */
export const wasStateSelected = str => {
  return stateEnums.indexOf(str.toUpperCase());
};

// tell us if a postcode was entered
export const wasPostCodeSelected = str => {
  return str.length === 4 && parseInt(str) !== NaN;
};

// tell us if a suburb name was entered
export const wasSuburbSelected = str => {
  return isNaN(str);
};

/**
 *
 * Check User can drive or NOT
 *
 *
 *
 */

let age = 19;
let hasLicense = true;
userCanDriveOrNot(age, hasLicense);
function userCanDriveOrNot(age, license) {
  if (age >= 18) {
    if (license === true) {
      console.log('### User can DRIVE ###');
    } else {
      console.log('### User cannot DRIVE ###');
    }
  } else {
    console.log('### User cannot DRIVE ###');
  }
}

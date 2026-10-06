let isAdmin = false;
checkEvenOdd(91);
checkIsAdminOrNot(1);
CandidateCanVote(134);

// Check Even Or Odd
function checkEvenOdd(value) {
  if (value % 2 == 0) {
    console.log(`${value} is EVEN`);
  } else {
    console.log(`${value} is ODD`);
  }
}
// Check for Admin using type and value
function checkIsAdminOrNot(value) {
  if (value === true) {
    console.log(`User is Admin`);
  } else {
    console.log(`Guest User`);
  }
}

function CandidateCanVote(age) {
  if (age >= 18 && age <= 100) {
    console.log('Yes Candidate can Vote');
  } else {
    console.log("NO! Candidate can't vote .");
  }
}

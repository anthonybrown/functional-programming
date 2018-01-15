/* A RECURSIVE FUNCTION */
// function mapScoresToGrades( tests, average ) {
//   if ( tests.length === 0 ) return []
//   const head = tests[0];
//   const tail = tests.slice( 1 );
//   return [ head >= average ? 'A' : 'F' ].concat(
//     mapScoresToGrades( tail, average )
//   );
// }

// function mapScoresToGrades( tests, average ) {
//   let gradeTest = function( testScore ) {
//     return testScore >= average ? 'A' : 'F';
//   }
//   return tests.map( gradeTest );
// }

const mapScoresToGrades = ( tests, average ) => {
  let getGradeTest = average =>
    ( (testScore ) => testScore >= average ? 'A' : 'F' );

  let gradeTest = getGradeTest(average)
  return tests.map(gradeTest);
}

function getAverage( tests ) {
  return tests.reduce( (acc, elem) => acc + elem ) / tests.length;
}

function gradeTests( tests ) {
  const average = getAverage( tests );
  return mapScoresToGrades( tests, average );
}



console.log( gradeTests( [0.1, 0.5, 1] ) );      // (1.6 / 3) = 0.53333 [F, F, A]
console.log( gradeTests( [0.1, 0.7, 1] ) );      // (1.8 / 3) = 0.6     [F, A, A]
console.log( gradeTests( [8, 9, 10, 7, 8] ) );   // (42 / 5)  = 8.4     [F, A, A, F, F]
console.log( gradeTests( [9, 10, 10, 11, 7] ) ); // (47 / 5)  = 9.4     [F, A, A, A, F]

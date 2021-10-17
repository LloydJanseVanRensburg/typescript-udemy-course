import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

let manUnitedWins = 0;

/**
 * 0 Date
 * 1 Home Team
 * 2 Away Team
 * 3 Home Score
 * 4 Away Score
 * 5 Winner H || A
 * 6 Referre
 */
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);

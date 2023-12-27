// Write a program that accepts 2 5 letters word and do the following:
// Iterate over user input until success and output the following:
//  "!" if the input letter is at the same spot as the letter in the secret word
//  "?" if the input letter is present in the secret word but not in the right position
//  "*" otherwise (wrong letter)

const wordle = (word1, word2) => {
  const hints = [];
  const hintLetters = {};

  word2.split('').forEach((letter, index) => {
    if (letter === word1[index]) {
      hints.push('!');
    } else {
      hints.push('*');
    }

    if (letter in hintLetters) {
      hintLetters[letter]++;
    } else {
      hintLetters[letter] = 1;
    }
  });

  word1.split('').forEach((letter, index) => {
    if (letter in hintLetters && hintLetters[letter] > 0) {
      hints[index] = '?';
      hintLetters[letter]--;
      console.log(hintLetters);
    }
  });

  console.log(hints.join(''));

  // const result = word2.split('').map((letter, index) => {
  //   if (letter === word1[index]) {
  //     return '!';
  //   } else if (word1.includes(letter)) {
  //     return '?';
  //   }
  //   return '*';
  // });
};

wordle('ababa', 'babab');
// ????*

// wordle('drake', 'awake');
// ?*!!!
// **!!!
// wordle('abbbb', 'caaaa');
// *?***

// Examples:
// wordle('horse', 'human');
// // !****
// wordle('horse', 'hotel');
// // !!*?*
// wordle('horse', 'house');

// wordle("horse", "horse")
// !!!!!

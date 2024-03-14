function isPalindrome(word) {
  let wordIndexLeft = 0;
  let wordIndexRight = word.length - 1;
  while (wordIndexLeft <= wordIndexRight) {
    if (word[wordIndexLeft] !== word[wordIndexRight]) {
      return false;
    }
    wordIndexLeft++;
    wordIndexRight--;
  }
  return true;
}

console.log(isPalindrome("abba"));

/* 
  1. split string into character array
  2. verify first and last character match
  3. create loop iteration to increase/decrease index 
  4. use "while" loop - to end when left is greater than or equal to right
  5. inside loop - use if to determine if matching, if dont match, return false.
  6. return true when loop is done (because you never returned a false)
*/

/*
if input is a palindrome, expect function to return true.
If not, expect to return false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

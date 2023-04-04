/* A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.
Return the maximum number of words that appear in a single sentence.

Example 1:

Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words. */

var mostWordsFound = function (sentences) {
  //store the result
  let result = 0;

  //loop through the sentences
  for (let i = 0; i < sentences.length; i++) {
    //get each word
    let words = sentences[i].split(" ");
    //check the max number of words per sentence
    let max = Math.max(words.length);

    //if our current maximum is less than the current result
    if (max > result) {
      //our result becomes the next max
      result = max;
      //otherwise
    } else {
      //our max becomes the current result
      max = result;
    }
  }

  return result;
};

let sentences = [
  "w jrpihe zsyqn l dxchifbxlasaehj",
  "nmmfrwyl jscqyxk a xfibiooix xolyqfdspkliyejsnksfewbjom",
  "xnleojowaxwpyogyrayfgyuzhgtdzrsyococuqexggigtberizdzlyrdsfvryiynhg",
  "krpwiazoulcixkkeyogizvicdkbrsiiuhizhkxdpssynfzuigvcbovm",
  "rgmz rgztiup wqnvbucfqcyjivvoeedyxvjsmtqwpqpxmzdupfyfeewxegrlbjtsjkusyektigr",
  "o lgsbechr lqcgfiat pkqdutzrq iveyv iqzgvyddyoqqmqerbmkxlbtmdtkinlk",
  "hrvh efqvjilibdqxjlpmanmogiossjyxepotezo",
  "qstd zui nbbohtuk",
  "qsdrerdzjvhxjqchvuewevyzlkyydpeeblpc",
];

console.log(mostWordsFound(sentences));

var mostWordsFoundTwo = function (sentences) {
  //store the result
  let result = 0;

  //loop through the sentences
  for (let i = 0; i < sentences.length; i++) {
    //get each word
    let words = sentences[i].split(" ");
    //if result is less than words.length, then it becomes the word.length
    //else if result is greater than words.length, then it preserves its value
    result = result < words.length ? words.length : result;
  }

  return result;
};

console.log(mostWordsFoundTwo(sentences));

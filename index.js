// Aufgabe 4
// false answer
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i <= numbers.length; i++) {
    sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
    }
    var numbers = [1, 2, 3, 4, 5];
    var average = calculateAverage(numbers);
    console.log("Der Durchschnitt beträgt: " + average);

// right answer SOLUTION
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
  }
  
  var numbers = [1, 2, 3, 4, 5];
  var average = calculateAverage(numbers);
  console.log("Der Durchschnitt beträgt: " + average);

// Aufgabe 5
// false answer
function checkPalindrome(word) {
    var reverseWord = "";
    for (var i = 0; i >= 0; i--) {
    reverseWord += word[i];
    }
    if (reverseWord === word) {
    return false;
    } else {
    return true;
    }
    }
    var word = "level";
    var isPalindrome = checkPalindrome(word);
    console.log("Ist das Wort ein Palindrom? " + isPalindrome);

// right answer SOLUTION
function checkPalindrome(word) {
    var reverseWord = "";
    for (var i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    if (reverseWord === word) {
      return true;
    } else {
      return false;
    }
  }
  
  var word = "level";
  var isPalindrome = checkPalindrome(word);
  console.log("Ist das Wort ein Palindrom? " + isPalindrome);
function checkPalindrome() {
    const numberInput = document.getElementById('numberInput').value;
    const reversedNumber = reverseNumber(numberInput);
  
    if (numberInput === reversedNumber) {
      document.getElementById('result').innerText = `${numberInput} is a palindrome.`;
    } else {
      document.getElementById('result').innerText = `${numberInput} is not a palindrome.`;
    }
  }
  
  function reverseNumber(number) {
    return number.toString().split('').reverse().join('');
  }
  
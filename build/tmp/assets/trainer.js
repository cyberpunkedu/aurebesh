function checker(a, b) {
    
    var str1 = a.replace(/\s+/g, '');
    var str2 = b;
    var newWord = "";

if (str1.toUpperCase() === str2.toUpperCase()) {
    newWord = wordList.words[Math.floor(Math.random() * wordList.words.length)];
    }
else {
    newWord = str2;
    }

return newWord;

}

function responder(a, b) {
    
    var str1 = a.replace(/\s+/g, '');
    var str2 = b;
    var guess = 0;

if (str1.toUpperCase() === str2.toUpperCase()) {
    guess = 0;
    }
else {
    guess = 1;
    }

return guess;

}


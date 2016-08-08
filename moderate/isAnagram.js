function isAnagram(word1, word2) {
  if (!word1 || !word2 || !word1.length || !word2.length) {
    throw new Error('isAnagram requires two strings to be passed.')
  }

  var normalizedWord1 = word1.replace(/\s+/g, '').toLowerCase();
  var normalizedWord2 = word2.replace(/\s+/g, '').toLowerCase();

  var counts = [];
  var word1Length = normalizedWord1.length;
  var word2Length = normalizedWord2.length

  if (word1Length !== word2Length) { return false; }

  for (var i = 0; i < word1Length; i++) {
    var index = normalizedWord1.charCodeAt(i)-97;
    counts[index] = (counts[index] || 0) + 1;
  }

  for (var i = 0; i < word2Length; i++) {
    var index = normalizedWord2.charCodeAt(i)-97;
    counts[index] = (counts[index] || 0) - 1;
  }

  return counts.every(function(count) {
    return !count;
  });
}


console.log('asd', 'dsa', isAnagram('asd', 'dsa'));
console.log('aaafffggghhh', 'hhhfffgggaaa', isAnagram('aaafffggghhh', 'hhhfffgggaaa'));
console.log('a', 'b', isAnagram('a', 'b'));

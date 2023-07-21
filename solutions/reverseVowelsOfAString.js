function reverseVowels(s) {
  const vowels = new Set(["e", "a", "i", "o", "u", "E", "A", "I", "O", "U"]);
  const chars = s.split("");
  let i = 0;
  let j = chars.length - 1;

  while (i < j) {
    if (!vowels.has(chars[i])) {
      i++;
    }
    if (!vowels.has(chars[j])) {
      j--;
    }
    if (vowels.has(chars[i]) && vowels.has(chars[j])) {
      [chars[i], chars[j]] = [chars[j], chars[i]];
      i++;
      j--;
    }
  }

  return chars.join("");
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim();
  let split = s.split(' ').filter(s => s);
  for (let i = 0; i < split.length / 2; i++) {
    let temp = split[i];
    split[i] = split[split.length - 1 - i];
    split[split.length - 1 - i] = temp;
  }
  return split.join(' ');
};


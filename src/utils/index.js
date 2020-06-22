function replaceStringCharater(stringValue, newCharacter = '', characterPosition) {
  let stringWrapper = stringValue.split(newCharacter)
  stringWrapper[characterPosition] = newCharacter
  return stringWrapper.join(newCharacter)
}

function getFirstTwoCharacters(string) {
  return string.substring(0, 2)
}

function isCardValueCorrectFormat(cardValue) {
  return cardValue.length <= 2
}

function removeInvalidCharacters(string, character, validCharacters, characterPosition) {
  if (!validCharacters.includes(string.charAt(characterPosition))) {
    return replaceStringCharater(string, '', characterPosition)
  }

  return string
}

export { replaceStringCharater, getFirstTwoCharacters, isCardValueCorrectFormat, removeInvalidCharacters }
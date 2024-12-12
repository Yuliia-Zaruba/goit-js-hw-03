function makeArray(firstArray, secondArray, maxLength) {
  const combinedArray = firstArray.concat(secondArray);

  if (combinedArray.length > maxLength) {
    return combinedArray.slice(0, maxLength);
  }

  return combinedArray;
}

function isInvalid(arg) {
  return typeof arg !== 'string';
}

const concatStrings = (str1, separator = '') => {
  // const acc = separator;
  // if (isInvalid(str1)) {
  //   str1 = '';
  //   separator = '';
  // }
  if (isInvalid(separator)) separator = '';
  return str2 => {
    // if (isInvalid(str2)) str2 = '';
    return str3 => {
      // if (isInvalid(str3)) str3 = '';
      return str4 => {
        // if (isInvalid(str4)) str4 = '';
        // return (
        //   (isInvalid(str1) ? '' : str1 + separator) +
        //   (isInvalid(str2) ? '' : str2 + separator) +
        //   (isInvalid(str3) ? '' : str3 + separator) +
        //   (isInvalid(str4) ? '' : str4)
        // );
        // return str1 + separator + str2 + separator + str3 + separator + str4;

        return [str1, str2, str3, str4].join(separator);
      };
    };
  };
};

console.log(concatStrings(234, '-')('13')('third')());

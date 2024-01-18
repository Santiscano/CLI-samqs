

// styleCamelCase
// StylePascalCase
// style_snake_case
// style-kebab-case

export const camelToPascal = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


export const camelToSnake = ( camelCase ) => {
  const snakeCase = camelCase.replace(
    /[A-Z]/g,
    (match) => "_" + match.toLowerCase()
  );
  return snakeCase;
};

export const SnakeToPascal = ( snakeCase ) => {
  const arrayWords = snakeCase.split("_");
  const pascalCase = arrayWords.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
  return pascalCase;
}

export const snakeToCamel = (snakeCase) => {
  const arrayWords = snakeCase.split("_"); //creamos un array por cada palabra separada
  // primera palabra la dejamos igual y la unimos con todas las demas que se les hara el camelcase
  const camelCase = arrayWords[0] + arrayWords.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
  return camelCase;
};

export const pascalToSnake = (pascalCase) => {
  const snakeCase = pascalCase.replace(
    /[A-Z]/g,
    (match, index) => (index !== 0 ? "_" : "") + match.toLowerCase()
  );
  return snakeCase;
};

export const pascalToCamel = ( pascalCase ) => {
  const camelCase = pascalCase.charAt(0).toLowerCase() + pascalCase.slice(1);
  return camelCase;
};

export const snakeOrKebabToCamel = (input) => {
  // Si la cadena contiene guiones bajos (_), trata como snake_case
  if (input.includes("_")) {
    const arrayWords = input.split("_");
    const camelCase = arrayWords[0] + arrayWords.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
    return camelCase;
  }

  // Si la cadena contiene guiones (-), trata como kebab-case
  if (input.includes("-")) {
    const arrayWords = input.split("-");
    const camelCase = arrayWords[0] + arrayWords.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
    return camelCase;
  }

  // Si no se encuentra ninguno de los separadores, asume que ya está en camelCase
  return input;
};

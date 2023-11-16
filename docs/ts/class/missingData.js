
export const createMissingData = () => {
  const data = `
class MissingData {
  constructor() {}

  static missingData = (data: Object): string | null => {
      const missingField = Object.entries(data).find(([key, value]) => {
          return value === null || value === undefined || value === "";
      });

      return missingField ? missingField[0] : null;
  };
}

export default MissingData;
`;

  return data;
};

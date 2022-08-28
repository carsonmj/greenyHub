export const generateKeywordQueryParameter = (keyword: string) => {
  return `${keyword} in:name ${keyword} in:description`;
};

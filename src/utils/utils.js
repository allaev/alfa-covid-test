export const parseKeyString = str => {
  const replacedUnderscore = str.replace(/_/g, ' ');
  return replacedUnderscore.charAt(0).toUpperCase() + replacedUnderscore.slice(1);
}

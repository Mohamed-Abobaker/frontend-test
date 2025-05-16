export const formatDate = (timestamp: number | string): string => {
  const date = new Date(typeof timestamp === 'string' ? parseInt(timestamp) : timestamp);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatUnderscoreString = (str: string): string => {
  if (!str) {
    return '';
  }

  const words = str.split('_');
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) return ''; //handles empty strings
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedWords.join(' ');
};

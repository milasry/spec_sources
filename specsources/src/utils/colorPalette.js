const component = () => Math.floor(Math.random() * 256)
  .toString(16)
  .padStart(2, '0');

export const getRandomColor = () => `#${component()}${component()}${component()}`;

export const attachColor = (source = {}) => ({
  ...source,
  color: source.color || getRandomColor()
});

export default getRandomColor;

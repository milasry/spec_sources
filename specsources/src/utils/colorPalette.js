const COLORS = [
  '#F5D0C5',
  '#C5E5F5',
  '#F6F1B4',
  '#D3F0E0',
  '#E5D3F6',
  '#F9D9E2',
  '#D6E8B8',
  '#FFE3C8'
];

export const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

export const attachColor = (source = {}) => ({
  ...source,
  color: source.color || getRandomColor()
});

export default getRandomColor;

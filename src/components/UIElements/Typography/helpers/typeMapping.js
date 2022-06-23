export const SIZE = {
  small: "small",
  medium: "medium",
  large: "large",
};

export const TYPE = {
  text: "text",
  subtitle: "subtitle",
  title: "title",
};

const typeMapping = {
  text: {
    font: {
      [SIZE.small]: 12,
      [SIZE.medium]: 16,
      [SIZE.large]: 24,
    },
  },
  subtitle: {
    font: {
      [SIZE.small]: 16,
      [SIZE.medium]: 24,
      [SIZE.large]: 32,
    },
  },
  title: {
    font: {
      [SIZE.small]: 32,
      [SIZE.medium]: 40,
      [SIZE.large]: 48,
    },
  },
};

export default typeMapping;

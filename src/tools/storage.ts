export const store = <T = any>(offset: string, value: T): T => {
  localStorage.setItem(offset, JSON.stringify(value));
  return value;
};

export const load = <T = any>(offset: string, def: T): T => {
  const value = JSON.parse(localStorage.getItem(offset));
  return value || def;
};

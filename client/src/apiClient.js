export const API_BASE_URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL || '';

const trimSlash = (value) => value.replace(/\/$/, '');

export const apiUrl = (path) => {
  const base = trimSlash(API_BASE_URL);
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return base ? `${base}${normalizedPath}` : normalizedPath;
};

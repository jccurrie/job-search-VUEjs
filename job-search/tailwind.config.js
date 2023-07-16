/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

export const content = ['./index.html', './src/**/*.{vue,js,ts}'];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Open Sans', ...fontFamily.sans],
    },
    colors: {
      'brand-gray-1': '#dadce0',
      'brand-blue-1': '#1967d2',
      'brand-green-1': '#137333',
    },
  },
};
export const plugins = [];

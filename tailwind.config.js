const defaultTheme = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                green1: '#49977d',
                'green-light': '#74b59f',
                'menu-overlay': '#4c4c4c',
                'menu-items-hover': '#f2f2f2',
                'headers-background': '#f4f4f4',
                'ribbon-purple': '#7a4996',
            },
        },
    },
    plugins: [],
};

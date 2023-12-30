const defaultTheme = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily:{
                'sans': ['Inter', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                "green1": '#49977d',
                "green-light": '#74b59f',
            },
        },
    },
    plugins: [],
};

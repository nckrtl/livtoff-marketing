const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    darkMode: "class",
    purge: {
        content: [
            "./resources/**/*.blade.php",
            "./resources/**/*.antlers.html",
            "./resources/**/*.js",
            "./resources/**/*.vue",
            "./safelist.txt",
        ],
        options: {},
    },
    theme: {
        screens: {
            xs: "400px",
            ...defaultTheme.screens,
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
        },
        fontSize: {
            sm: ["14px", "20px"],
            base: ["16px", "24px"],
            lg: ["20px", "28px"],
            xl: ["24px", "32px"],
        },
        fontFamily: {
            sans: [
                "Inter var",
                "system-ui",
                "BlinkMacSystemFont",
                "-apple-system",
                "Helvetica",
                "Helvetica Neue",
                "sans-serif",
            ],
        },
        extend: {},
    },
    plugins: [],
};

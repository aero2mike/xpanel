// const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            darkMode: 'class',
            fontFamily: {
                // sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                "2xs": ["0.75rem", { lineHeight: "1.25rem" }],
                xs: ["0.8125rem", { lineHeight: "1.5rem" }],
                sm: ["0.875rem", { lineHeight: "1.5rem" }],
                base: ["1rem", { lineHeight: "1.75rem" }],
                lg: ["1.125rem", { lineHeight: "1.75rem" }],
                xl: ["1.25rem", { lineHeight: "1.75rem" }],
                "2xl": ["1.5rem", { lineHeight: "2rem" }],
                "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
                "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
                "5xl": ["3rem", { lineHeight: "1" }],
                "6xl": ["3.75rem", { lineHeight: "1" }],
                "7xl": ["4.5rem", { lineHeight: "1" }],
                "8xl": ["6rem", { lineHeight: "1" }],
                "9xl": ["8rem", { lineHeight: "1" }],
            },
            animation: {
                text: "text 5s ease infinite",
                gradient: "gradient 2s ease infinite;",
            },
            keyframes: {
                boxShadow: {
                    glow: "0 0 4px rgb(0 0 0 / 0.1)",
                },
                maxWidth: {
                    lg: "33rem",
                    "2xl": "40rem",
                    "3xl": "50rem",
                    "5xl": "66rem",
                },
                opacity: {
                    1: "0.01",
                    2.5: "0.025",
                    7.5: "0.075",
                    15: "0.15",
                },
                text: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
                gradient: {
                    "0%, 100%": {
                        " background-position": "left center",
                    },
                    "50%": {
                        "background-position": "right center",
                    },
                },
            },
        },
    },

    plugins: [
        require("@headlessui/vue"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};

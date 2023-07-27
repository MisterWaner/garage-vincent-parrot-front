/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "black-02": "#020202",
                "red-02": "#ff2e00",
                "blue-02": "#0a369d",
                "yellow-02": "#ffc100",
            },
            backgroundColor: {
                "black-02": "#020202",
                "red-02": "#ff2e00",
                "blue-02": "#0a369d",
                "yellow-02": "#ffc100",
            }
            
        },
    },
    plugins: [],
};

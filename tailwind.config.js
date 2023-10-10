/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      content: {
        'require': '>>',
      }
    },
  },
  plugins: [],
}


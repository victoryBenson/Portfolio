// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: 'class',
//   theme: {
//     listStyleType: {
//       none: 'none',
//       disc: 'disc',
//       decimal: 'decimal',
//       square: 'square',
//       roman: 'upper-roman',
//     },
//     fontFamily:{
//       poppins: ["Poppins", "sans-serif"],
//     },
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#15803D', 
          arch: '#8E948F',
          // light: '#3B82F6',   // lighter shade
          // dark: '#1E3A8A',    // darker shade
        },
        // secondary: {
        //   DEFAULT: '#9333EA',
        //   light: '#C084FC',
        //   dark: '#7E22CE',
        // },
        // accent: '#F59E0B', // single accent color
      },
    },
  },
  plugins: [],
}

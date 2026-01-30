/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        'electric-red': '#FF0000',
        'off-white': '#F0F0F0',
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      },
      boxShadow: {
        'hard': '8px 8px 0px 0px #000000',
        'hard-sm': '4px 4px 0px 0px #000000',
        'hard-red': '8px 8px 0px 0px #FF0000',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      }
    },
  },
  plugins: [],
}

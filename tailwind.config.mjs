/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brandOrange: "#F89880",
        brandGray: "#1C1C1C",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brandOrange: "#F89880",
        brandGray: "#222222",
        brandWhite: "#FAF9F6",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-linear-gray': 'linear-gradient(to right, #505CAD, #A0A4C5)',
        'gradient-linear-blue': 'linear-gradient(to right, #505CAD, #637CFF)',
        'gradient-linear-purple': 'linear-gradient(to right, #637CFF, #9B8AFF)',
        'gradient-linear-custom': 'linear-gradient(to right, #505CAD, #637CFF, #A0A4C5)',
        'gradient-1': 'linear-gradient(to right, #a855f7, #3b82f6 , #3b82f6)', // First gradient
        'gradient-2': 'linear-gradient(to right, #3b82f6, #a855f7, #1d4ed8)', // Second gradient
      },
      colors: {
        'solid-blue': '#505CAD',
        'solid-light-gray': '#E0E0E0',
        'solid-gray': '#F0F0F0',
        'solid-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
} satisfies Config;

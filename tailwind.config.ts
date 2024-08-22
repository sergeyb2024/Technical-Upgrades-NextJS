import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
    },
    // colors: {
    //     'blue': '#1fb6ff',
    //     'purple': '#7e5bef',
    //     'pink': '#ff49db',
    //     'orange': '#ff7849',
    //     'green': '#13ce66',
    //     'yellow': '#ffc82c',
    //     'gray-dark': '#273444',
    //     'gray': '#8492a6',
    //     'gray-light': '#d3dce6',
    // },
    extend: {
        backgroundImage: {
            'hero-pattern': "url('./public/image_10.png')"
        },
        spacing: {
            '128': '32rem',
            '144': '36rem',
        },
        borderRadius: {
            '4xl': '2rem',
        }
    }
  },
  plugins: [],
};
export default config;

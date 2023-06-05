/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    animation: {
      'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      'ping-fast': 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
      'spin':'spin 1s linear infinite',
      'bounce':'bounce 1s infinite,'
    },
  },
  plugins: [],
}

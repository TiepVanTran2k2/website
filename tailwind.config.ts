import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                'roboto-medium': 'var(--font-family)',
                'roboto-regular': 'var(--font-roboto-regular)',
                lexend: 'var(--font-lexend)',
            },
            colors: {
                primary: 'var(--primary)',
                'primary-100': 'var(--primary-100)',
                'primary-200': 'var(--primary-200)',
                'primary-500': 'var(--primary-500)',
                'primary-700': 'var(--primary-700)',
                'color-text': 'var(--color-text)',
                'color-text-secondnary': 'var(--color-text-secondnary)',
                'color-border': 'var(--color-border)',
                'color-white': 'var(--background-color-white)',
                'bg-hover-primary': 'var(--bg-hover-primary)',
            },
        },
    },
    plugins: [],
};
export default config;

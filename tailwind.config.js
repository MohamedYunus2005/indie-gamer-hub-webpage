export default {
    darkMode: 'class', // IMPORTANT
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-bg': '#050510',
                'neon-purple': '#a855f7',
                'neon-cyan': '#00e5ff',
                'neon-pink': '#ff00ff',
                'glass': 'rgba(255, 255, 255, 0.05)',
            },
            fontFamily: {
                'gamer': ['"Orbitron"', 'sans-serif'], // Optional: if we add a font
                'body': ['"Inter"', 'sans-serif'],
            },
            dropShadow: {
                'glow': '0 0 10px rgba(168, 85, 247, 0.5)',
                'glow-cyan': '0 0 10px rgba(0, 229, 255, 0.5)',
            }
        },
    },
    plugins: [],
}

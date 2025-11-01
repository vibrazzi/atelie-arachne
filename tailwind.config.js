module.exports = {
  theme: {
    extend: {
      colors: {
        arachne: {
          deepPurple: "#1a0033",
          darkPurple: "#2d004d",
          royalPurple: "#4a0080",
          neonPurple: "#7b2cbf",
          lightPurple: "#9d4edd",
          web: "#b8b8d1",
          venom: "#00ff88",
          shadow: "#0f0818",
          silk: "#e0aaff",
          accent: "#ff006e",
        },
        pretoProfundo: "#0B0B0B",
        roxoEscuro: "#3D0075",
        verdeVenenoso: "#1B5E20",
        vermelhoSangue: "#8B0000",
        cinzaMetalico: "#4B4B4B",
        azulEspectral: "#1A237E",
        fundoClaro: "#1C1C1C",
        primary: "#fff"
      },
      textColor: {
        light: "#000000",
      },
      backgroundImage: {
        'navbar-bg': "url('/assets/capa-spider.avif')",
        'web-pattern': "url('/web-pattern.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-spider': 'linear-gradient(135deg, #1a0033 0%, #2d004d 25%, #4a0080 50%, #7b2cbf 75%, #9d4edd 100%)',
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
      dropShadow: {
        glow: "0 0 16px #a21caf, 0 0 32px #f472b6",
        'glow-purple': '0 0 20px rgba(123, 44, 191, 0.8)',
        'glow-neon': '0 0 30px rgba(157, 78, 221, 0.6)',
        'web': '0 2px 8px rgba(184, 184, 209, 0.5)',
      },
      boxShadow: {
        'web': '0 0 20px rgba(123, 44, 191, 0.3), inset 0 0 20px rgba(157, 78, 221, 0.1)',
        'card': '0 4px 20px rgba(26, 0, 51, 0.4)',
        'card-hover': '0 8px 30px rgba(123, 44, 191, 0.6), 0 0 60px rgba(157, 78, 221, 0.3)',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'gradient-xy': 'gradient-xy 6s ease infinite',
        'spin-slow': 'spin 6s linear infinite',
        'spin-slower': 'spin 12s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'web-shimmer': 'web-shimmer 3s linear infinite',
        'spider-crawl': 'spider-crawl 20s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-xy': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
            backgroundSize: '200% 200%'
          },
          '50%': {
            backgroundPosition: '100% 50%',
            backgroundSize: '250% 250%'
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 8px rgba(123, 44, 191, 0.8))'
          },
          '50%': {
            opacity: '0.8',
            filter: 'drop-shadow(0 0 20px rgba(157, 78, 221, 1))'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'web-shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'spider-crawl': {
          '0%': { transform: 'translateX(-100%) translateY(0)' },
          '25%': { transform: 'translateX(0%) translateY(-20px)' },
          '50%': { transform: 'translateX(50%) translateY(0)' },
          '75%': { transform: 'translateX(100%) translateY(-20px)' },
          '100%': { transform: 'translateX(200%) translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};

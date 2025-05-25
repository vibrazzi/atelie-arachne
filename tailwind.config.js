module.exports = {
  theme: {
    extend: {
      colors: {
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
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'spin-slow': 'spin 6s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};

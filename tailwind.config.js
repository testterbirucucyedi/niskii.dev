module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        online: "#3ba55d",
        idle: "#faa81a",
        dnd: "#ed4245",
        offline: "#747f8d",
        link: 'hsl(197,calc(var(--saturation-factor, 1)*100%),47.8%)'
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        oldlace: "#fff3e3",
        black: "#000",
        cornflowerblue: "#64a5eb",
        gray: {
          "100": "#2c2c2e",
          "200": "rgba(0, 0, 0, 0.6)",
        },
        darkorange: "#f27d15",
        lightsteelblue: "#abc1cb",
        lightskyblue: "#95beea",
        mediumpurple: "#c492f7",
        seagreen: "#008151",
        lightgreen: {
          "100": "rgba(189, 252, 173, 0.4)",
          "200": "rgba(124, 194, 106, 0.4)",
        },
        dimgray: "#536171",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inherit: "inherit",
        "pontano-sans": "'Pontano Sans'",
        roboto: "Roboto",
        montserrat: "Montserrat",
        "rocknroll-one": "'RocknRoll One'",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "base-3": "16.3px",
      },
    },
    fontSize: {
      lg: "18px",
      "11xl": "30px",
      "5xl": "24px",
      "31xl": "50px",
      "17xl": "36px",
      xl: "20px",
      base: "16px",
      "7xl": "26px",
      "41xl": "60px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

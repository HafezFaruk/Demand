module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },

    extend: {
      backgroundImage: {
        bgImage:
          "url('http://rafcart.rslahmed.com/assets/images/banner-1.jpg')",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        roboto: "Roboto, sans-serif",
        satisfy: "Dancing Script",
      },
      colors: {
        myColor: "#FD3D57",
        twitter: "#1DA1F2",
        facebook: "#3b5998",
        instagram: "#DF2B76",
      },
      borderWidth: {
        2: "1px",
      },
      spacing: {
        "9px": "9px",
      },
    },
  },
  plugins: [],
};
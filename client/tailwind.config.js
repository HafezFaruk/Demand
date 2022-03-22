module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        width: "430px",
      },
     backgroundImage:{
        "bgImage" : "url('http://rafcart.rslahmed.com/assets/images/banner-1.jpg')",
        "bgImage2" : "url('https://i.ibb.co/8gvBJ95/contact-banner.jpg')"
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
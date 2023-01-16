import { styled } from "../../styles/.";

export const HeaderContainer = styled("header", {
  height: "5rem",

  color: "#fff",

  display: "flex",
  alignItems: "center",
  justifyContent: 'space-between',

  padding: "0 3rem",
  

  a: {
    borderRightWidth: "1px",
    paddingRight: "1rem",
  },
});

export const Navigation = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "100%",

  "> div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "#fff",

    marginLeft: "2rem",

    "> button": {
      height: "3rem",
      padding: "0 0.5rem",

      display: "flex",
      alignItems: "center",

      gap: "1rem",

      borderRadius: "9999px",

      background: '#131313',

      img: {
        width: "2rem",
        height: "2rem",
        borderRadius: "9999px",
      },

      strong: {
        color: "#fff",
      },
    },
  },
});

export const DetailsProfile = styled("div", {
  position: "absolute",

  display: "flex",
  alignItems: "center",

  background: '#555',
  padding: "0 3rem",

  height: "2rem",

  borderRadius: " 30px",

  zIndex: "50",
  transition: 'all .5s',
  cursor: 'pointer',


  "> button": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",

    color: "#fff",
  },
});

export const EndContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
  
  a: {
    textDecoration: 'none',
    background: '#131313',
    color: 'gray',
    borderRadius: '30px',
    padding: '.5rem 2rem',
    
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    gap: '.5rem',

    '&:hover': {
      color: '#fff',
    }
  }
})
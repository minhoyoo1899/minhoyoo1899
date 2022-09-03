export default function stylingArr() {
  const styleDat = [
    {
      // root
      width: "100vw",
      height: "100vh",
    },
    {
      // l_arrow
      width: "10vh",
    },
    {
      // r_arrow
      width: "10vh",
    },
    {
      // l_arrow.children[0]
      width: "100%",
      transform: "rotate(90deg)",
    },
    {
      // r_arrow.children[0]
      width: "100%",
      transform: "rotate(-90deg)",
    },
    {
      // poke_slide
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    {
      // mainDiv
      width: "83vw",
      height: "100%",
      overflowX: "hidden",
    },
    {
      // pokeList
      width: "auto",
      height: "91vh",
      display: "inline-flex",
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
      alignItems: "center",
    }
  ];
  return styleDat;
}
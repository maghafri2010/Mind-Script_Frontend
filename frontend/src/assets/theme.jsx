import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
    background: mode === "dark" ? "#141414" : "#FAF4E1",
    bars: mode === "dark" ? "#212325" : "#FCEABA",
    menu: mode === "dark" ? "#141414" : "#FAF4E1",
    text: mode === "dark" ? "white" : "black",
});

background: "#FAF4E1"
bars: "#FCEABA"
text: "black"

background : "black"
bars: "#212325"
menu: "#141414"
text: "white"
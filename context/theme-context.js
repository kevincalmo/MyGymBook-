import React from "react";

/* theme de mon application */
const ThemeContext = React.createContext({
    name: 'MyGymBook',
    themeColor: 'blue',
    ligth: 'ligth'
});

export default ThemeContext;
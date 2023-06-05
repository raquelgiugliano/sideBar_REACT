import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { MyRoutes } from "./routers/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import { Light, Dark } from "./styles/Themes";

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <div>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <Router>
            <Container
              className={sideBarOpen ? "sidebarState active" : "sidebarState"}
            >
              <SideBar
                sideBarOpen={sideBarOpen}
                setSideBarOpen={setSideBarOpen}
              />
              <MyRoutes />
            </Container>
          </Router>
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({ theme }) => theme.bgtotal};
  transition:all 0.3s;
  &.active {
    grid-template-columns: 300px auto;
  }
  color:${({ theme }) => theme.text};
`;
export default App;

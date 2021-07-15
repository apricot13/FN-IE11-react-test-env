import { ThemeProvider } from 'styled-components';
import { west_theme } from "northants-design-system";
import ComponentWereTesting from './ComponentWereTesting';

function App() {
  return (
    <ThemeProvider theme={west_theme}>
    <div className="App">
      <ComponentWereTesting />
    </div>
    </ThemeProvider>
  );
}

export default App;

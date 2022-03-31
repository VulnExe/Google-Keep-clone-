
import { render } from '@testing-library/react';
import './App.css';
import "./Header";
import Footer from "./Footer";
import Note from "./Note"
import "./styles.css"
import Header from './Header';
import Lists from "./notes"
function App() {
  render()
  return (
  <div>
    <Header/>
    {Lists.map((cont)=>(
      <Note
        key = {cont.key}
        title={cont.title}
        description = {cont.description}
      />
    ))}
    <Footer/>
  </div>
   
  
)
    };
export default App;

import "./App.css";
import SimpleSwitch from "./simple_switch";

function App() {
  return (
    <div className="App">
      <SimpleSwitch size={10} labelOn="ON" labelOff="OFF" />
      <SimpleSwitch size={10} labelOn="ON" labelOff="OFF" />
    </div>
  );
}

export default App;

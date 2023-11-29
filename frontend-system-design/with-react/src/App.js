import { data } from "./components/explorer/explorer.data";
import { Explorer } from "./components/explorer/explorer.screen";
import { HolyGrail } from "./components/holy-grail/holy-grail.screen";
import { ProgressBar } from "./components/progress-bar/progress-bar.screen";
import { Suggestions } from "./components/typeahead-input/typeahead-input.component";

function App() {
  return (
    <div className="App">
      {/* <Explorer explorer={data} /> */}
      {/* <HolyGrail /> */}
      {/* <ProgressBar cycle={10} timeout={10000} /> */}
      <Suggestions />
    </div>
  );
}

export default App;

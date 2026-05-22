import { Navigasi } from "./Component/Navigasi";
import { Beranda } from "./Pages/Beranda";

function App() {
  return (
    <div classname="overflow-visible h-auto">
      <Navigasi />
      <Beranda />
      <Css />
    </div>
  );
}

function Css() {
  return (
    <style>
      {`
      @media (prefers-reduced-motion: reduce) {
                .header {
                    transition: none;
                }
            }
            `}
    </style>
  );
}

export default App;

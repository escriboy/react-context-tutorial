import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

export default function App() {
  return (
    <div>
      {/* Provider를 사용할 때는 value값을 명시해 주어야 한다. */}
      <ColorContext.Provider value={{ color: "red" }}>
        <div>
          <ColorBox />
        </div>
      </ColorContext.Provider>
    </div>
  );
}

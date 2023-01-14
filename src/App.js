import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

export default function App() {
  return (
    <div>
      {/* Provider를 사용할 때는 value값을 명시해 주어야 한다. */}
      <ColorProvider>
        <div>
          <SelectColors />
          <ColorBox />
        </div>
      </ColorProvider>
    </div>
  );
}

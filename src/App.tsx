import { Header } from "./components/common/Header";
import { Stack } from "./components/DesignSystem/main";
import { HomePage } from "./components/pages/HomePage";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  return (
    <>
      <Stack>
        <Header />
        <HomePage />
      </Stack>
    </>
  );
});

export default App;

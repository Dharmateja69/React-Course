import Counter from "./Components/ContextApi/Counter";
import MyProvider from "./Components/ContextApi/MyContext";

function App() {
  return (
    <div>
      <MyProvider>
        <Counter />
      </MyProvider>
    </div>
  );
}

export default App;

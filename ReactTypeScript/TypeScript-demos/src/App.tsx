import Button from "./Assignment/Button";

function App() {
  return (
    <div>
      <Button
        label="Click"
        onClick={() => console.log("Clicked")}
        disabled={false}
      />
    </div>
  );
}

export default App;

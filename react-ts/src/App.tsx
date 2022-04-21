import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Todos items={["Learn TypeScript", "Learn React Query"]} />
    </div>
  );
}

export default App;

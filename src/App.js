import "./App.css";
import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 2980,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Bike Insurance",
      amount: 950,
      date: new Date(2022, 5, 19),
    },
    {
      id: "e3",
      title: "Health Insurance",
      amount: 620,
      date: new Date(2022, 5, 22),
    },
    {
      id: "e4",
      title: "Life Insurance",
      amount: 1050,
      date: new Date(2021, 5, 23),
    },
  ];

  return (
    <div className="expenses">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

import "./App.css";

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

function App() {
  const chemist = people.filter((person) => person.profession === "chemist");
  const listItems = chemist.map((mapp) => <li>{mapp.name}</li>);
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}

export default App;

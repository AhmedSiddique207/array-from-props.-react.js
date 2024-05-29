import React from "react";
import UserDetails from "./components/userDetails";

function App() {
  const Details = [
    {
      id: 1,
      name: "Ahmed",
      email: "ahmed@gmail.com",
    },
    {
      id: 2,
      name: "Ali",
      email: "ali@gmail.com",
    },
    {
      id: 3,
      name: "Arshmaan",
      email: "arsh@gmail.com",
    },
    {
      id: 4,
      name: "Shafay",
      email: "Shafay@gmail.com",
    },
  ];

  return (
    <div>
      {Details.map((user ) => (
        <UserDetails key={user} user={user} />
      ))}
    </div>
  );
}

export default App;


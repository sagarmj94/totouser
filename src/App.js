import "./App.css";
import React from "react";

function App() {
  let useData = [
    {
      name: "Sagar",
    },
    {
      name: "Sagar",
    },
    {
      name: "Sagar",
    },
    {
      name: "Sagar",
    },
    {
      name: "Sunny",
    },
    {
      name: "Shubham",
    },
    {
      name: "Shubham",
    },
    {
      name: "Shubham",
    },
    {
      name: "Shubham",
    },
    {
      name: "Shubham",
    },
    {
      name: "Shubham",
    },
    {
      name: "Shubham",
    },
    {
      name: "Shubham",
    },
    {
      name: "Shubham",
    },
    {
      name: "Shubham",
    },
    {
      name: "Hrithik",
    },
    {
      name: "Hridhan",
    },
    {
      name: "Kshitij",
    },
  ];

  const mapNames = {};
  useData.forEach((item) => {
    if (mapNames[item.name]) {
      mapNames[item.name] += 1;
    } else {
      mapNames[item.name] = 1;
    }
  });

  const namesWith = Object.keys(mapNames).map((name) => ({
    name,
    occurrences: mapNames[name],
  }));
  return (
    <>
      <table style={{ width: "100%" }}>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>Name</th>
            <th>Numbers</th>
          </tr>
        </thead>
        <tbody>
          {namesWith.map((nameObj, index) => {
            let rowColor = "";
            if (nameObj.occurrences > 0 && nameObj.occurrences < 3) {
              rowColor = "red";
            } else if (nameObj.occurrences >= 3 && nameObj.occurrences < 10) {
              rowColor = "yellow";
            } else if (nameObj.occurrences >= 10) {
              rowColor = "green";
            }

            return (
              <tr
                key={index}
                style={{ backgroundColor: rowColor, textAlign: "center" }}
              >
                <td>{nameObj.name}</td>
                <td>{nameObj.occurrences}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;

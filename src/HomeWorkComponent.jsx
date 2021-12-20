import React, { useState } from "react";
import Contacts from "./Components/Contacts";

const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
    genderImage: "https://cdn-icons-png.flaticon.com/512/1340/1340619.png",
  },

  {
    firstName: "Робінба",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },

  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },

  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },

  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
    genderImage: "https://cdn-icons-png.flaticon.com/512/1340/1340619.png",
  },

  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319527",
    gender: "male",
    genderImage: "https://cdn-icons-png.flaticon.com/512/1340/1340619.png",
  },
];
export default function HomeWorkComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const [foundContacts, setFoundContacts] = useState(contacts);

  const filterContacts = (e) => {
    const enteredSymbols = e.target.value;
    if (enteredSymbols !== "") {
      const result = contacts.filter((contact) => {
        let user =
          contact.firstName + contact.lastName + contact.phone + contact.gender;
        //console.log(contact);
        if (user.toLowerCase().includes("female")) {
          console.log("baba");
          contact.genderImage =
            "https://cdn-icons-png.flaticon.com/512/766/766514.png";
          console.log("this is", contact.genderImage);
          console.log("this ", contact);
        }
        return user.toLowerCase().includes(enteredSymbols.toLowerCase());
      });
      setFoundContacts(result);
    } else {
      setFoundContacts(contacts);
    }
  };

  return (
    <div className="list">
      <div className="headerOfList">
        <h3>List of contacts</h3>
        <input
          type="search"
          placeholder="enter some for search"
          onChange={filterContacts}
          className="input"></input>
      </div>
      <div className="bodyOfList">
        {foundContacts && foundContacts.length > 0 ? (
          foundContacts.map((contact) => (
            <li className="Contact" key={contact.firstName}>
              <Contacts {...contact} />
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

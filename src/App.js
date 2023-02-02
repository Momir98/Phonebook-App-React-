import React, { useState } from 'react';
import './App.css';

function Phonebook() {

const storedEntries = JSON.parse(sessionStorage.getItem('entries')) || JSON.parse(localStorage.getItem('entries')) || {};
const [entries, setEntries] = useState(storedEntries);

const handleSubmit = (e) => {
e.preventDefault();
const name = e.target.name.value;
const phone = e.target.phone.value;
setEntries({ ...entries, [name]: phone });

sessionStorage.setItem('entries', JSON.stringify({ ...entries, [name]: phone }));
localStorage.setItem('entries', JSON.stringify({ ...entries, [name]: phone }));
}

const handleDelete = (name) => {
const newEntries = { ...entries };
delete newEntries[name];
setEntries(newEntries);

sessionStorage.setItem('entries', JSON.stringify(newEntries));
localStorage.setItem('entries', JSON.stringify(newEntries));
}

return (

<div>

<h1>Phonebook App</h1>

<form onSubmit={handleSubmit}>
<label>
<span id='name'>First and last name : </span>
<input type="text" name="name" />
</label>

<label>

  <br></br>

  <span id='number'>Phone Number : </span>
<input type="text" name="phone" />
</label>

<br></br>

<button id='addbtn' type="submit">Add Contact</button>

</form>

<h2>Contacts :</h2>

<ul>
{Object.keys(entries).map((name) => (
<li key={name}>
{name}: {entries[name]}
<button id='dltbtn' onClick={() => handleDelete(name)}>X</button>
</li>
))}
</ul>
</div>
);
}

export default Phonebook;
import React from "react";

export default function HiScore() {
  return (
    <div>
      <h1>Update a Race Time here</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="race">race:</label>
        <input type="text" id="race" />
        <label htmlFor="time">time:</label>
        <input type="text" id="time" />
      </form>
    </div>
  );
}

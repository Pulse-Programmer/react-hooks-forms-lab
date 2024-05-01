import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  function handleData(e) {
    const inputName = e.target.name;
    let value = e.target.value;

    props.setFormData({
      ...props.formData,
      //id: uuid(),
      [inputName]: value,
    });
  }

  return (
    <form
      className="NewItem"
      onSubmit={(e) => {
        e.preventDefault();
        let id = uuid();
        return props.onItemFormSubmit(id);
      }}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={props.formData.name}
          onChange={handleData}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={props.formData.category}
          onChange={handleData}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  let [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  });
  //const [itemsArray, setItemsArray] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  //form submit
  function handleSubmit(id) {
    // e.preventDefault();

    formData = {
      ...formData,
      id: id,
    };
    // setItemsArray([...itemsArray, formData]);
    setItems([...items, formData]);
  }
  //items = itemsArray;

  function handleSearch(e) {
    setSearchInput(e.target.value);
  }

  //search filter implementation
  items = items.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  //category filter implementation
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        searchInput={searchInput}
        onSearchChange={handleSearch}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

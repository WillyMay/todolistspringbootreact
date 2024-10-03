import React, { useEffect, useState } from "react";

const initialDataForm = {
    id: 0,
  name: "",
  description: "",
  price: "",
};

function ProductForm({ productSelected, handlerAdd }) {
  const [form, setForm] = useState(initialDataForm);
  const { name, description, price } = form;

  useEffect(() => {
    setForm(productSelected);
  }, [productSelected]);
  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault(); //para no perder los datos y refresh

        if (!name || !description || !price) {
          alert("Debe completar los datos del formulario.");
          return;
        }
        handlerAdd(form);
        setForm(initialDataForm);
      }}
    >
      <div>
        <input
          type="text"
          placeholder="Name"
          className="form-control my-3 w-75"
          name="name"
          value={name}
          onChange={(event) => {
            setForm({ ...form, name: event.target.value });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Description"
          className="form-control my-3 w-75"
          name="description"
          value={description}
          onChange={(event) => {
            setForm({ ...form, description: event.target.value });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Price"
          className="form-control my-3 w-75"
          name="price"
          value={price}
          onChange={(event) => {
            setForm({ ...form, price: event.target.value });
          }}
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">{form.id > 0 ? 'Update' : 'Create '}</button>
      </div>
    </form>
  );
}

export default ProductForm;

import React from "react";

export default function CreateBook({ createNewBook, handleChangeCreate, createForm }) {
  return (
    <>
      <h2>Add a new Book</h2>
      <form onSubmit={createNewBook}>
        <input name="title" onChange={handleChangeCreate} placeholder="Title of Book" value={createForm.title} />
        <br />
        <input name="author" onChange={handleChangeCreate} placeholder="Author" value={createForm.author} />
        <br />
        <input name="description" onChange={handleChangeCreate} placeholder="Description" value={createForm.description} />
        <br />
        <input name="year" onChange={handleChangeCreate} placeholder="Year of Release" value={createForm.year} />
        <br />
        <input name="isbn" onChange={handleChangeCreate} placeholder="ISBN Number" value={createForm.isbn} />
        <br />
        <button>Create Book</button>
      </form>
    </>
  );
}

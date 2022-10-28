import React from "react";

export default function CreateBook({ createNewBook, handleChangeCreate, createForm }) {
  return (
    <>
      <h2>Add a new Book</h2>
      <form onSubmit={createNewBook}>
        <input name="title" onChange={handleChangeCreate} placeholder="Title of Book" value={createForm.title} />
        <input name="author" onChange={handleChangeCreate} placeholder="Author" value={createForm.author} />
        <input name="description" onChange={handleChangeCreate} placeholder="Description" value={createForm.description} />
        <input name="year" onChange={handleChangeCreate} placeholder="Year of Release" value={createForm.year} />
        <input name="isbn" onChange={handleChangeCreate} placeholder="ISBN Number" value={createForm.isbn} />
        <input type="submit" value="Create Book" />
      </form>
    </>
  );
}

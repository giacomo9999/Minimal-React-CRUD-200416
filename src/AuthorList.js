import React from "react";

const AuthorList = (props) => {
  const AuthorTable = props.authorData.map((author) => (
    <tr key={`author_${author.id}`}>
      <td>{author.id}</td>
      <td>{author.authorName}</td>
      <td>{author.bookTitle}</td>
      <td>
        <button onClick={() => props.editAuthor(author)}>Edit</button>
      </td>
      <td>
        <button onClick={() => props.deleteAuthor(author.id)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <div className="container-inner">
      <h2>Author List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Book</th>
          </tr>
        </thead>
        <tbody>{AuthorTable}</tbody>
      </table>
    </div>
  );
};

export default AuthorList;

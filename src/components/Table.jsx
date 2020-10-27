import React from "react";

export default function Table(props) {
  return (
    <main className="container d-flex justify-content-center py-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Birth Date</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.mail}</td>
                <td>{item.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

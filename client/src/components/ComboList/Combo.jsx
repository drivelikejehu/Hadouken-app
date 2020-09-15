import React from "react";

const Combo = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.comboName}</td>
      <td>{props.comboString}</td>
      <td>
        <button
          className="btn btn-info"
          type="submit"
          onClick={() => props.handleEdit(props.id)}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          type="submit"
          onClick={() => props.handleDelete(props.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Combo;

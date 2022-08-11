import React from "react";

export default function ProductCatergoryRow(props) {
  const { category } = props;

  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

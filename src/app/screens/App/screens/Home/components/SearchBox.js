import React from "react";

export default function SearchBox(props) {
  return <input type="text" name="searchText" onChange={props.onChange} />;
}

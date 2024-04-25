import React from "react";
import EntrieItem from "./EntrieItem";

function Entrieslist({ entries }) {
  const entriesLists = entries.map((entry,index) => {
    return <EntrieItem key={index} title={entry.title} date={entry.time} />;
  });

  return (
    <>
      <h2> Entries Available </h2>
      <div id="entrieslist">{entriesLists}</div>
    </>
  );
}

export default Entrieslist;

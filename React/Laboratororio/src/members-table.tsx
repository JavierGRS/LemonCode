import React, { useState } from "react";
import { MemberRow } from "./member-row";
import { Member } from "./member-row.model";

export const MembersTable = () => {

  const [members, setMembers] = React.useState<Member[]>([]);
  const [filter, setFilter] = useState("lemoncode")

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) => response.json())
      .then((response) => {
        setMembers(response);
      });
  }, []);

  const onClickSearch = () =>  {
    fetch(`https://api.github.com/orgs/${filter}/members`)
    .then((response) => response.json())
    .then((response) => {
      setMembers(response);
    });
  }

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <button onClick={() => onClickSearch()}>Search</button>
      <div className="user-list-container">
      <span className="header">Avatar</span>
      <span className="header">ID</span>
      <span className="header">Login</span>
      {members.map((item) => (
        <MemberRow key={item.id} item={item} />
      ))}
    </div>
    </div>

  );
};

import React from "react";
import * as vm from "../model/member-row.model";

interface Props {
  item: vm.Member;
}

export const MemberRow = (props: Props) => {
  const { item } = props;
  return (
    <React.Fragment key={item.id}>
      <img src={item.avatar_url} />
      <span>{item.id}</span>
      <span>{item.login}</span>
    </React.Fragment>
  );
};

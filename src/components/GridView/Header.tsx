import React from "react";

const Header = ({ header }: any) => {
  return (
    <thead>
      <tr>
        {header.map((item: any, index: number) => {
          return (
            <th scope="col" key={index}>
              {item.value}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default Header;

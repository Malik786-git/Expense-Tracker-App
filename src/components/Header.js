import React from "react";

const Header = ({dark, handleMode}) => {
  return (
    <div className="Header">
      <h1>
        Expense Tracker
        <span title="click to change theme" onClick={()=> handleMode(!dark)}>
          {dark ? (
            <i className="fa fa-moon-o" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-sun-o" aria-hidden="true"></i>
          )}
        </span>
      </h1>
    </div>
  );
};

export default Header;

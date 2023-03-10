import React from "react";
import { Link } from "react-router-dom";

/* const MenuItem = ({ path = '', title, icon }) => {
	const isSelected = window.location.href.match(path);

	return (
		<Link aria-label="link" to={path}>
			<li
				className={`item-link d-flex w-100 align-items-center mb-2 ${
					isSelected ? 'selected' : ''
				}`}
			>
				<div className="py-2 px-4">{icon}</div>
				<p className="text-capitalize m-0">{title}</p>
			</li>
		</Link>
	);
}; */

const MenuItem = ({ title, path = "/" }) => {
  return (
    <Link to={path}>
      <li className="d-flex">
        <div className="py-2 px-4">😍</div>
        <p className="text-capitalize m-0">{title}</p>
      </li>
    </Link>
  );
};
export default MenuItem;

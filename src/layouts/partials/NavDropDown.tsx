import React, { useState } from "react";

export default function NavDropDown({
  menu,
  pathname,
}: {
  menu: any;
  pathname: any;
}) {
  const [showContent, setShowContent] = useState(false);

  const handleChildMenuClick = () => {
    setShowContent(!showContent);
  };
  return (
    <li
      onClick={handleChildMenuClick}
      className="nav-item nav-dropdown group relative cursor-pointer"
    >
      <span
        className={`nav-link inline-flex items-center ${
          menu.children
            ?.map(({ url }: { url: any }) => url)
            .includes(pathname) ||
          menu.children
            ?.map(({ url }: { url: any }) => `${url}/`)
            .includes(pathname)
            ? "active"
            : ""
        }`}
      >
        {menu.name}
        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </span>
      <ul
        className={`nav-dropdown-list hidden lg:group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100 ${
          showContent && "max-lg:block"
        }`}
      >
        {menu.children?.map((child: any, i: number) => (
          <li key={`children-${i}`} className="nav-dropdown-item">
            <a
              href={child.url}
              className={`nav-dropdown-link block ${
                (pathname === `${child.url}/` || pathname === child.url) &&
                "active"
              }`}
            >
              {child.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

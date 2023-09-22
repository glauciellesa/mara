import Link from "next/link";
import React from "react";

interface DropdownMenuProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  href,
  children,
  ...rest
}) => {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
};

export default DropdownMenu;

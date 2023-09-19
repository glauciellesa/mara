import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  children: any;
  className: string;
}

const NavLink = (props: NavLinkProps) => {
  const router = useRouter();
  return (
    <>
      <Link
        href={props.href}
        className={
          router.pathname == props.href
            ? "underline underline-offset-4 font-bold"
            : props.className
        }
      >
        {props.children}
      </Link>
    </>
  );
};

export default NavLink;

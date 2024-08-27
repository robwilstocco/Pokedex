import { useQuery } from "@tanstack/react-query";
import {
  DropDown,
  DropDownButton,
  DropDownContent,
  DropDownLink,
  NavbarWrapper,
  StyledNavbar,
} from "./styles";
import { getGenerations, getTypes } from "../../api";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { setCookie } from "nookies";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const { data: generations } = useQuery({
    queryKey: ["generations"],
    queryFn: getGenerations,
  });
  const { data: types } = useQuery({ queryKey: ["types"], queryFn: getTypes });
  const [showIcon, setShowIcon] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = usePathname()

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <StyledNavbar>
      {showIcon && (
        <Link href={"/"} onClick={() => setCookie(null, "currentPage", "1")}>
          <Image src="/images/logo.png" width="30" height="30" alt="PokeCard" />
        </Link>
      )}
      <NavbarWrapper>
        {location !== '/' ? (
          <DropDown>
            <DropDownLink href='/'>BACK</DropDownLink>
          </DropDown>
        ) : (
          <>
            <DropDown>
              <DropDownButton>Generations</DropDownButton>
              <DropDownContent>
                {generations?.map((_, key) => (
                  <DropDownLink
                    key={key}
                    href={`/generation/${key + 1}`}
                  >{`Generation ${key + 1}`}</DropDownLink>
                ))}
              </DropDownContent>
            </DropDown>
            <DropDown>
              <DropDownButton>Types</DropDownButton>
              <DropDownContent>
                {types?.map((type, key) => (
                  <DropDownLink key={key} href={`/type/${type.name}`}>
                    {type.name}
                  </DropDownLink>
                ))}
              </DropDownContent>
            </DropDown>
          </>
        )}

      </NavbarWrapper>
    </StyledNavbar>
  );
};

export default NavBar;

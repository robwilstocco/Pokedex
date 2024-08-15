import { useQuery } from "@tanstack/react-query";
import { DropDown, DropDownButton, DropDownContent, DropDownLink, NavbarWrapper, StyledNavbar } from "./styles";
import { getGenerations, getTypes } from "../../api";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function NavBar() {
    const { data: generations } = useQuery({ queryKey: ['generations'], queryFn: getGenerations });
    const { data: types } = useQuery({ queryKey: ['types'], queryFn: getTypes });
    const [showIcon, setShowIcon] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > 80) {
            setShowIcon(true);
        } else {
            setShowIcon(false);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <StyledNavbar>
            {showIcon && <Image src="/images/logo.png" width="30" height="30" alt="PokeCard" />}
            <NavbarWrapper>
                <DropDown>
                    <DropDownButton>Generations</DropDownButton>
                    <DropDownContent>
                        {generations?.map((_, key) => (
                            <DropDownLink key={key} href={`/generation/${key + 1}`} >{`Generation ${key + 1}`}</DropDownLink>
                        ))}
                    </DropDownContent>
                </DropDown>
                <DropDown>
                    <DropDownButton>Types</DropDownButton>
                    <DropDownContent>
                        {types?.map((type, key) => (
                            <DropDownLink key={key} href={`/type/${type.name}`} >{type.name}</DropDownLink>
                        ))}
                    </DropDownContent>
                </DropDown>
            </NavbarWrapper>
        </StyledNavbar>
    )
}
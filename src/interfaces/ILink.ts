export interface ILink {
    children: React.ReactElement | React.ReactElement[]
    href: string,
    onclick?: () => void,
}
export interface IWrapper {
  children: React.ReactElement | React.ReactElement[];
  direction?: "column" | "row";
  justify?: "space-between" | "center" | "space-around";
  align?: "flex-start" | "flex-end" | "center";
  flex?: number;
}

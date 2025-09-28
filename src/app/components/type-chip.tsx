import { FC } from "react";
import styles from "./type-chip.module.css";

type TProps = {
  type: string;
};

export const TypeChip: FC<TProps> = ({ type }) => {
  return <span className={`${styles.chip} ${type}`}>{type}</span>;
};

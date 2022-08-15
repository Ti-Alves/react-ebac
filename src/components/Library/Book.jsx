import React from "react";
import { BookCard, BookCover, BookInfo, BookName, BookRate } from "../Style/Style";


export default function Book(props) {
  return (
    <BookCard>
      <BookCover src={props.cover} alt={props.name} />
      <BookInfo>
        <BookName>{props.name}</BookName>
        <BookRate>Nota: {props.rate}/5</BookRate>
      </BookInfo>
    </BookCard>
  );
}

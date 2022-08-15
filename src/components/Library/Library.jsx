import React from "react";
import { BookShelf } from "../Style/Style";
import Book from './Book';

export default function Library() {

  return (
    <BookShelf>
      <Book cover={require('../../bookcovers/Livro1.jpg')} name='A Pedagogia do Oprimido' rate='5'/>

      <Book cover={require('../../bookcovers/Livro2.jpg')} name='Heartstopper Vol. 1' rate='5'/>

      <Book cover={require('../../bookcovers/Livro3.jpg')} name='O Diario de Anne Frank' rate='5'/>

      <Book cover={require('../../bookcovers/Livro4.jpg')} name='Mitologia Grega - Uma Breve Introdução' rate='4'/>
    </BookShelf>
  );
}

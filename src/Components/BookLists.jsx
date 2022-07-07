import React from "react";
import BookCard from "./BookCard";
import styled from "styled-components";

const BookLists = ({ books }) => {
  return (
    <>
      {books.length > 0 &&
        books.map((SingleBook) => {
          return  <BookCardWrap key={SingleBook.id}> 
            <BookCard bookData={SingleBook}/> 
            </BookCardWrap>
        })}
    </>
  );
};

export default BookLists;

const BookCardWrap = styled.div`
    border: 1px solid red;
    padding: 5px;
    width:  310px;
`;
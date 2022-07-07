import React, { useEffect } from 'react'
import { getBooks } from '../Redux/action'
import { useDispatch, useSelector, } from 'react-redux/es/exports'
import Filtersort from '../Components/Filtersort'
import BookLists from '../Components/BookLists'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
const Books = () => {
  const [searchParams]=useSearchParams();
const dispatch = useDispatch()
const books = useSelector(state=>state.books)
    useEffect(()=>{
      const urlCategory=searchParams.getAll("category");
      const urlSort=searchParams.getAll("sortBy");
        if(books.length==0 && (!urlCategory || !urlSort)){
            dispatch(getBooks())
        }
       
    },[])
    console.log(books)
  return (
    <div>
<h2>Books</h2>
<BookPageWrap>

<FilterSortWrap>
<Filtersort/>
</FilterSortWrap>
<BookListWrap>
<BookLists books={books}/>
</BookListWrap>

</BookPageWrap> 

    </div>

  )
}

export default Books


const BookPageWrap = styled.div`
  display: flex;
`;

const FilterSortWrap = styled.div`
    width: 300px;
    border: 1px solid black;
`;

const BookListWrap = styled.div`
    width: 100%;
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, max-content));
    grid-gap: 16px;
    justify-content: center;
    padding: initial;
`;
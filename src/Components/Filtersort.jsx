
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { getBooks } from "../Redux/action";

const Filtersort = () => {
  const dispatch=useDispatch()
  
  const [searchParams,setSearchParams]=useSearchParams()
  const urlCAtegory=searchParams.getAll('category')
  const urlSort=searchParams.get('sortBy')
  const [category,setCategory]=useState(urlCAtegory||[])
  const [sortBy,setSortBy]=useState(urlSort||'')
  console.log(urlCAtegory,urlSort)
  const handleCheckbox=(e)=>{
    const option = e.target.value;
    let  newCategory=[...category]
    if(category.includes(option)){
      newCategory.splice(newCategory.indexOf(option),1)
    }
    else{
      newCategory.push(option)
    }

    setCategory(newCategory)
  }

  useEffect(()=>{
    if(category){
      setSearchParams({cat:category})
      dispatch(getBooks({params:{category}}))
    }
  },[category,dispatch,setSearchParams])
  console.log(searchParams)

  const handleSort=(e)=>{
    setSortBy(e.target.value )
  }
  console.log(sortBy)

  useEffect(()=>{
    if(sortBy){
      const params={
        category:searchParams.getAll('category'),
        sortBy,
      };
      const getBooksParams={
        params:{
          category:searchParams.getAll('category'),
          _sort:"release_year",
          _order:sortBy
        }
      }
      console.log(getBooksParams)
      
      setSearchParams({params});
      dispatch(getBooks(getBooksParams));
    }
  },[searchParams,dispatch,setSearchParams,sortBy])
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox" 
          onChange={handleCheckbox}
          value="Novel" 
           defaultChecked={category.includes('Novel')}/>
          <label>Novel</label>
        </div>
        <div>
          <input type="checkbox"
           
           onChange={handleCheckbox}
           value="Science_Fiction"
           defaultChecked={category.includes('Science_Fiction')} />
          <label>Science_Fiction</label>
        </div>
        <div>
          <input type="checkbox" 
          onChange={handleCheckbox}
          value="Thriller" 
           defaultChecked={category.includes('Thriller')}/>
          <label>Thriller</label>
        </div>
        <div>
          <input type="checkbox" 
          onChange={handleCheckbox}
          value="Motivational" 
           defaultChecked={category.includes('Motivational')}/>
          <label>Motivational</label>
        </div>
      </div>

      <h3>Sort</h3>
      <div onChange={handleSort}>
        <input type="radio" 
        value="asc" 
        name='sortBy'
         defaultChecked={sortBy==='asc'} />{""} Ascending
        <input type="radio" 
        value="desc"
         name="sortBy"
          defaultChecked={sortBy==='desc'}/>{""} Desending
      </div>
    </div>
  );
};

export default Filtersort





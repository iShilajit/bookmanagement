import React from 'react'

const BookCard = ({bookData}) => {
  return (
    <div>
      <div>
        <div  >
        {/* <img src={bookData.imgurl} alt="" srcset=""  width="100px"/> */}
      
      <img src="https://images-na.ssl-images-amazon.com/images/I/41y8qC9RT0S._SX404_BO1,204,203,200_.jpg" alt="" srcset="" width="100px"/>
        <div>{bookData.book_name}</div>
        </div>
        <div>{bookData.release_year}</div>
        <div>{bookData.category}</div>
       
      </div>
    </div>
  )
}

export default BookCard
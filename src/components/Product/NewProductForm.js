import React, { useState } from 'react';


const NewProductForm = () => {

  const [product, setProduct] = useState({
    available: true,
    title: "",
    description: ""
  })

  // const handleChange = (e) => {
  //   // console.log(e.target.name)
  //   const fieldName = e.target.name
  //   const fieldValue = e.target.value
    
  // }
  // const handleBlur = (e) => {
  //   // console.log(e.target.name)
  //   const fieldName = e.target.name
  //   const fieldValue = e.target.value
  //   setProduct({...product, title: fieldValue})
  // }
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form action="/product/new">
        <input 
          type="text" 
          name="title" 
          id="title"
          onBlur={(e) => setProduct({...product, title: e.target.value})}
        />
        <input 
          type="text" 
          name="description" 
          id="description"
          onBlur={(e) => setProduct({...product, description: e.target.value})}
        />
        {console.log(product)}
        <button onSubmit={handleSubmit}></button>
      </form>
    </div>
  )
}

export default NewProductForm

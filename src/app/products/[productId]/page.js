import React from 'react';
// import { useParams } from 'next/navigation';

export default function ProductDetails({params}) {
  return (
    <div className='font-extrabold'>
      <h1> This is product detail page of product {params.productId} </h1>  
    </div>
  );
}

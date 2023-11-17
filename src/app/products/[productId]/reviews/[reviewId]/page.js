import React from 'react'

export default function ReviewDetail({params}) {
  return (
    <div>Review{params.reviewId} for product {params.productId}</div>
    
  )
}

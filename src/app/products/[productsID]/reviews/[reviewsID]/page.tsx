'use client'
import { notFound } from "next/navigation"


function getRandomInt(count:number){
      return Math.floor(Math.random()*count)
}


const ReviewsPage = ({params}:{
    params:{
        productsID:string,
        reviewsID:string
    }
}) => {
  const Random=getRandomInt(2)
  console.log(Random)
  if(Random===1){
    throw new Error('Error loading reviews !');
  }
  if(parseInt(params.reviewsID)>1000){
    notFound()
  }
  return (
    <h1>ReviewsPage Details for ProductsID : {params.productsID} & ReviewsID:{params.reviewsID}</h1>
  )
}

export default ReviewsPage
import { notFound } from "next/navigation"

const ReviewsPage = ({params}:{
    params:{
        productsID:string,
        reviewsID:string
    }
}) => {
  if(parseInt(params.reviewsID)>1000){
    notFound()
  }
  return (
    <h1>ReviewsPage Details for ProductsID : {params.productsID} & ReviewsID:{params.reviewsID}</h1>
  )
}

export default ReviewsPage
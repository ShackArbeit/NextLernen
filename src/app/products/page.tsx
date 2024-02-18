import Link from "next/link"

const Products = () => {
  const productId=100
  return (
    <>
    <div>Products Home Pages</div>
    <Link href='/'>Home </Link>
    <Link href='/products/1'>Product 1</Link>
    <Link href='/products/2' replace>Product 2</Link>
    <Link href={`products/${productId}`}>Products {productId}</Link>
    </>
  )
}

export default Products
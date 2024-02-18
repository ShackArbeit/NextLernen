import Link from "next/link"

const Home = () => {
 
  return (
    <>
    <h1>Hello World</h1>
    <Link href='/blog'>Blog</Link>
    <Link href='/products'>Products</Link>
    
    </>
  )
}

export default Home
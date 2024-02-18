'use client'
import { useRouter } from "next/navigation";

const OrderProducts = () => {
  const router = useRouter();
  const handleClick=()=>{
      alert('Order Successly')
      console.log('Oder Successly ')
      router.push('/')
  }
  return (
    <div>
      <h1>Order Products</h1>
      <button onClick={handleClick}>Place Orders</button>
    </div>
  );
};

export default OrderProducts;

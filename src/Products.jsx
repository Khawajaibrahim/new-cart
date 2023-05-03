


import './Products.css';
function Products({product,AddtoCartf}) {
    return (
      <div className='center'>
      <div className='img'>
          <img className='default-img'  src={product.image} alt="" />
      </div>
      <div className='details'>
          <h6>{product.detail}</h6>
          <p>{product.price} </p>
         
          {/* <div className='del'>
              <p>{value.details}</p>
          </div>
          <div className='add_cart'>
              <Addcart />
          </div>
          <div className='categories'>
              <h6>{value.cat}</h6>
              <h6>{value.tag}</h6>
          </div>
           */}




<button className='btn' onClick={()=>{
AddtoCartf(product);

}}>Add to Cart</button>

      </div>
  </div>
    );
  }
  
  export default Products;
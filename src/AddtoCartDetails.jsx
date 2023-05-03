import './Products.css';
function AddtoCartDetails({item}) {
    return (
      <div className='ce'>
     
      <div className='de'>
          <h6>{item.detail}</h6>
          <p>{item.price} </p>
         
          {/* <div className='del'>
              <p>{value.details}</p>
          </div>
          <div className='add_cart'>
              <Addcart />
          </div>fdggfgd
          <div className='categories'>
              <h6>{value.cat}</h6>
              <h6>{value.tag}</h6>
          </div>
           */}






      </div>
  </div>
    );
  }
  
  export default AddtoCartDetails;
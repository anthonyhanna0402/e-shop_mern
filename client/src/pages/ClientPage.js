import React, { useState, useEffect } from 'react';
import Header from '../components/Customer/Layout/Header';
import axios from 'axios';
import ProductItem from '../components/Customer/Home/ProductItem';

const ClientPage = () => {

  const [production, setProduction] = useState([]); 

  const getProduction = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/client');
      console.log('response',response.data.product);
      if(response.data&&response.data.product) {
        setProduction(response.data.product);        
      } else {
        console.log("no data");
      }
  
    } catch(error) {
      console.log('error fetching', error);
    }
  }

  useEffect(()=>{
    getProduction();
  },[]);


  return (
    <>    
      <Header />
      <div className='grid grid-cols-6 mt-8'>
      {production&&(
        production.map(item=> (
          <ProductItem image={item.image} title={item.name} price={item.price} quantity={item.quantity} />
        ))
      )}
      </div>
    </>
  )
}

export default ClientPage;
import { useState, useEffect } from 'react';
export const Data = () => {
    const [land , setLand] =useState([]);


    useEffect(() => {
       getData();
    },[]);
   
   
     
   
     const getData = () => {
        axios.get(`https://reqres.in/api/users`).then(res => {
            setLand(res.data);
            console.log(land)
     })
     }


}
 
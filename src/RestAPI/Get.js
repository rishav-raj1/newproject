import React, {useState, useEffect} from 'react'
import '../App.css'


const Get = () => {

    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/users").then((result)=>{
            result.json().then((resp)=>{
                setData(resp)
            })
        })
    },[])


    return (
        <div className="app" align="center">
         <h1>Get API Call</h1>
         <table border="1">
           <thead>
              <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
              </tr>
           </thead>
           <tbody>

           {
               data.map((item)=>
               <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
              </tr>
               )
           }
             
           </tbody>
         </table>
            
        </div>
    )
}

export default Get




{/* 
    //http://localhost:3000/users
    
    <tr>
                  <td>2</td>
                  <td>Bittu</td>
                  <td>Kumar</td>
                  <td>21</td>
              </tr>
              <tr> 
                  <td>3</td>
                  <td>Chiku</td>
                  <td>Kumar</td>
                  <td>21</td>
              </tr>
             */}
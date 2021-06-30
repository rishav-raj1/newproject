import React,{useState} from 'react'

const Newone = () => {

    const [currentValue, updatedValue] = useState('Bittu Kumar');

    const funCall = () => {
         updatedValue('Rishav Kumar');
    }


    return (
        <div>
          <h2>{currentValue}</h2>
            <div>
              <button onClick = {() => funCall()}> Update </button>
            </div>
        </div>
    )
}

export default Newone

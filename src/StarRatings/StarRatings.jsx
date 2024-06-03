/* eslint-disable no-undef */
import React from 'react'

export const StarRatings = () => {
    const[count,setCount] =useState(0)
    const[Hover,SetHover] =useState(0);
  return (
    <div className='StarRatings'>
      {[...Array(noOfStars)].map((_, index) => {
        index+=1;
        return(
            <div>
                
            </div>
        )

      },
      }


    </div>
  )
}

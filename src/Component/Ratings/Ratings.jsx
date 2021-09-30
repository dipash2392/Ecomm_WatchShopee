import React from 'react'
import Rating from "react-rating"

export default function Ratings(props) {
    return (
        <div>
            <Rating {...props} initialRating={props.initialRating} />
        </div>
    )
}


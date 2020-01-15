import React from "react";
import StarRatings from "react-star-ratings";

export default function Starrating({rate}) {
    return (
        <StarRatings
            starRatedColor="#CD853F"
            numberOfStars={5}
            name='rating'
            rating={rate}
            starDimension="15px"
            starSpacing="2px"
        />
    );
}
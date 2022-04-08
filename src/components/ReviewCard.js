import React from "react";
import { Card,  CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';
import 'components/componentStyle.css'
import { getStars, 
    NAMEKEY, TYPEKEY, 
    RATINGKEY, REVIEWKEY } from "../utils/review-utils";


function ReviewCard(props) {
    let review = props.review
    const ratingValue = props.count + 1;
    const greyStars = 5 - Number(review[RATINGKEY]);
    const stars = getStars(Number(review[RATINGKEY], greyStars));

    return(
        <Card className="mt-3 font500" style={{maxWidth: '70%', display: 'inline-block'}}>
            <CardBody>
                <CardTitle>
                    <strong>{review[NAMEKEY]}</strong>
                    <span style={{position: 'absolute', right: '1.5em'}}>{review.Timestamp.substring(0,9)}</span>
                </CardTitle>
                <div style={{display: 'block'}}>{stars}</div>
                <CardSubtitle style={{paddingTop: '5px'}}>{review[TYPEKEY]}</CardSubtitle>
                <CardText className="mt-2 font500 text-left">{review[REVIEWKEY]}</CardText>
            </CardBody>
        </Card>
  );
}

export default ReviewCard;

import React, {useState} from "react";
import { Card,  CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import 'components/componentStyle.css'
import { getStars, 
    NAMEKEY, TYPEKEY, 
    RATINGKEY, REVIEWKEY, SHOWREVIEWKEY, 
    MAXLENGTH, ANONYMOUSNAMEKEY } from "../utils/review-utils";


function ReviewCard(props) {
    const [seeMoreEnabled, setSeeMoreEnabled] = useState(false);
    let review = props.review;
    const stars = getStars(Number(review[RATINGKEY]));
    const substringIndex = (review.Timestamp.lastIndexOf('/')) + 5;

    return(
        <Card className="mt-3 font500">
            <CardBody>
                <CardTitle>
                    {review[SHOWREVIEWKEY] === ANONYMOUSNAMEKEY
                     ? (
                        <strong>Anonymous</strong>
                    ) : (
                        <strong>{review[NAMEKEY]}</strong>
                    )}
                    <span className="review-timestamp">{review.Timestamp.substring(0,substringIndex)}</span>
                </CardTitle>
                <div>{stars}</div>
                <CardSubtitle className="pt-1"><p>{review[TYPEKEY]}</p></CardSubtitle>

                <CardText className="mt-2 font500 text-left">
                    {review[REVIEWKEY]?.length < MAXLENGTH
                    ? (
                        <span className="font500">{review[REVIEWKEY]}</span>) 
                    : !seeMoreEnabled ? (
                        <span className="font500">
                            {review[REVIEWKEY].substring(0,MAXLENGTH)}...
                            <span className="ml-1 review-see-more" onClick={() => setSeeMoreEnabled(true)}>read more</span>
                        </span>) 
                    : (
                        <span className="font500">
                            {review[REVIEWKEY]}
                            <span className="ml-1 review-see-more" onClick={() => setSeeMoreEnabled(false)}>read less</span>
                        </span>
                    )}
                </CardText>
            </CardBody>
        </Card>
  );
}

export default ReviewCard;

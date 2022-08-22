import React, {useState} from "react";
import {Container, Row, Col, Button} from "reactstrap";
import * as GSheetReader from 'g-sheets-api';
import DemoFooter from "components/Footers/DemoFooter";
import ShortPageHeader from "components/Headers/ShortPageHeader.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import PageTitle from "components/PageTitle";
import ReviewCard from "components/ReviewCard.js";
import { OPTIONS, SHOWREVIEWKEY, getReviewTotals } from "../utils/review-utils.js";
import LoadingSVG from "components/LoadingSVG.js";

function ReviewPage() {
    const [reviews, setReviews] = useState();
    const [showReviews, setShowReviews] = useState(false);
    const [loading, setLoading] = useState(true);
    const [reviewTotals, setReviewTotals] = useState({});

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");

    if(!reviews){
        GSheetReader(OPTIONS, results => {
            if(results.length > 0){ 
              setShowReviews(true);             
            }
            setLoading(false);
            setReviews(results);
            getReviewTotals(results, setReviewTotals);
            return results;
            }).catch(err => {
            setLoading(false);
            console.log('error with sheet call', err);
        });
    }
    
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  return (
    <div>
      <IndexNavbar/>
      <ShortPageHeader path="https://ik.imagekit.io/ostlerfilmandphoto/Engagements/TheEvans/IMG_5576_cfBsK4pyT.jpg"/>
      <div className="section profile-content">
          <Container className="page-container">
            <PageTitle title="Reviews" /> 
            <div className="reviews-grid">
            <Row className="mr-1 mt-2">
                    <Col>
                    <span className="mr-2 font500 font120">{reviewTotals.totalReviews} Review{reviewTotals.reviewsSuffix}</span>
                    {showReviews && (
                      <div style={{fontSize: '12px'}}>{reviewTotals.avgStars} {reviewTotals.average} out of 5</div>
                    )}

                    </Col>
                    <Col style={{textAlign: 'right'}}>
                      <a href="/leave-review">
                      <Button outline color="info" className="review-leave-review-btn">Leave Review</Button>
                      </a>
                    </Col>
                </Row>

              {loading 
              ? ( <div className="mt-5">
                  <LoadingSVG/>
                  <span className="ml-2">Loading Reviews...</span>
                </div>
              ) 
              : (
                <>
                  {showReviews
                  ? (
                    <>
                      {reviews?.map((review, count) => {
                          if(review[SHOWREVIEWKEY]?.substring(0,3) === 'Yes'){
                            return(<ReviewCard key={count} review={review} count={count}/>); 
                          }
                          return null;
                      })}
                    </>
                  ) : (
                    <div className="mt-4 font500" style={{marginBottom: '10em'}}>No reviews to display</div>
                  )}
               </>
              )}
            </div>
          </Container>
      </div>
      <DemoFooter/>
    </div>
  );
}

export default ReviewPage;
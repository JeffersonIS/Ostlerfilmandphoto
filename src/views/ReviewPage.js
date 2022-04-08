import React, {useState} from "react";
import {Container} from "reactstrap";
import * as GSheetReader from 'g-sheets-api';
import DemoFooter from "components/Footers/DemoFooter";
import ShortPageHeader from "components/Headers/ShortPageHeader.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import PageTitle from "components/PageTitle";
import ReviewCard from "components/ReviewCard.js";
import { OPTIONS, SHOWREVIEWKEY } from "../utils/review-utils.js";

function ReviewPage() {
    const [reviews, setReviews] = useState();
    const [showReviews, setShowReviews] = useState(false);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");

    if(!reviews){
        GSheetReader(OPTIONS, results => {
            if(results.length > 0){
                setShowReviews(true);             
            }
            setReviews(results);
            return results;
            }).catch(err => {
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
              {showReviews
              ? (
                  <div className="reviews-grid">
                    {reviews?.map((review, count) => {
                        if(review[SHOWREVIEWKEY] === 'Yes'){
                            return(<ReviewCard review={review} count={count}/>); 
                        }
                    })}
                </div>
              ) : (
                <div style={{marginBottom: '10em'}}>We don't have any reviews to show yet</div>
              )}

          </Container>
      </div>
      <DemoFooter/>
    </div>
  );
}

export default ReviewPage;
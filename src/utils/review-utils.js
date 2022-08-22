import { AiFillStar } from 'react-icons/ai';
export const SHEETID = '1xTAFnhsTUApm4tQEreW5D_ckGZfK709bM3eZs0zIFnk';
export const SHEETAPIKEY = 'AIzaSyDpkCqZoEk3Bc4Bax2Gmx9brGXoQiw0rgc';
export const SHOWREVIEWKEY = 'Is it okay if we use your review on our website and in other media?';
export const NAMEKEY = 'Enter your name';
export const RATINGKEY = 'Rate your experience with Ostler Film & Photo';
export const TYPEKEY = 'Select type of session/service';
export const REVIEWKEY = 'Write a review';
export const ANONYMOUSNAMEKEY = 'Yes, but leave my name as anonymous'
export const MAXLENGTH = 450;
export const OPTIONS = {
    apiKey: SHEETAPIKEY,
    sheetId: SHEETID,
    sheetNumber: 1,
    sheetName: 'Responses', // if sheetName is supplied, this will take precedence over sheetNumber
    returnAllResults: true,
  };
const STARS = [1,2,3,4,5];

export function getStars(goldStars){
    const starsHTML = STARS.map((i, count) => {
        if(i <= goldStars){
            return(<AiFillStar key={count} color='gold'/>)
        } else{
            return(<AiFillStar key={count} color='grey'/>
        )}
    });

    return starsHTML;
}

export function getReviewTotals(results, setReviewTotals) {
    let total = 0;
    let avgRating = 0;
    let reviewsSuffix = '';
    results.map((result) => {
        if(result[NAMEKEY]){
            let rating = Number(result[RATINGKEY]);
            total += rating;
        }
        return null;
    });

    avgRating = total/results.length;
    results.length === 1 ? reviewsSuffix = '' : reviewsSuffix = 's'; 
    setReviewTotals(
        {
            average: avgRating,
            reviewsSuffix: reviewsSuffix,
            totalReviews: results.length,
            avgStars: getStars(avgRating)
        }
    )
    
}

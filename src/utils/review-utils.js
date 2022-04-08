import { AiFillStar } from 'react-icons/ai';
export const SHEETID = '1S7nX4mclsCt8hWmg9NPFQKeeB4-YflH-fHhlO_oNF_A';
export const SHEETAPIKEY = 'AIzaSyDpkCqZoEk3Bc4Bax2Gmx9brGXoQiw0rgc';
export const SHOWREVIEWKEY = 'Is it okay if we use your review on our website and in other media?';
export const NAMEKEY = 'Enter first name';
export const RATINGKEY = 'Rate your experience';
export const TYPEKEY = 'Select type of session';
export const REVIEWKEY = 'Write a review';
export const OPTIONS = {
    apiKey: SHEETAPIKEY,
    sheetId: SHEETID,
    sheetNumber: 1,
    sheetName: 'Responses', // if sheetName is supplied, this will take precedence over sheetNumber
    returnAllResults: true,
  };
const STARS = [1,2,3,4,5];

export function getStars(goldStars, greyStars){
    const starsHTML = STARS.map((i) => {
        if(i <= goldStars){
            return(<AiFillStar color='gold'/>)
        } else{
            return(<AiFillStar color='grey'/>
        )}
    });

    return starsHTML;
}

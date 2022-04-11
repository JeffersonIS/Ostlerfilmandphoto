import React from "react";
import 'components/componentStyle.css'

function PageTitle(props) {

    return(
        <div className="text-center">
            <h1 className='page-title'>{props.title}</h1>
        </div>
  );
}

export default PageTitle;

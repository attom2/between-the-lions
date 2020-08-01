import React from 'react'
import { Link, useParams, useHistory} from 'react-router-dom' 

const EmbeddedBook = ({bookToRender}) => {
  const previewLink = bookToRender.volumeInfo.previewLink + '&output=embed'
  let params = useParams();
  let history = useHistory();
  console.log(params)
  return (
    <>
        <button 
        aria-label={`Go Back To Home Page`}
        onClick= {() => history.goBack()}>
        ⬅ GO BACK
        </button>
      {previewLink.length && 
      <iframe 
        frameBorder="0" 
        scrolling="no" 
        style={{ border: 0 }} 
        src={previewLink} 
        width="600"
        height="700 " 
        role="document"
        title={bookToRender.volumeInfo.title}
      ></iframe> }
    </>
  )
  
}

export default EmbeddedBook
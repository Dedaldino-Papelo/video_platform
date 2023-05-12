import React from "react";
import "./content.style.css";
import ReactPlayer from 'react-player'

const Content = () => {
  return (
    <div className="ContentSide">
      <div className="player-wrapper">  
        <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=KC5-n17EdqE'
            width='100%'
            height= '75vh'
          />
      </div>

      <div className="Comments">
        <span>Comment Bellow</span>
        <div>
          <form className="comment-form">
            <textarea 
              style={{resize: "none", padding: "15px"}} 
                className="comment-text" cols="100" rows="10" placeholder="Comment">
                </textarea>
                <button className="btn-send">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Content;
Content;

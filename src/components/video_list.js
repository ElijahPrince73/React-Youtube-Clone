import React from 'react'

const VideoList = (props) => {
  return (
    <div>
      <ul className="col-md-4 list-group">
        <li>
          {props.videos.length}
        </li>
      </ul>
    </div>
  );
};

export default VideoList;

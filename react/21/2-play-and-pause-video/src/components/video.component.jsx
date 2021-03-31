import { React, forwardRef } from "react";

const video = forwardRef((props, ref) => {
  return (
    <video ref={ref}>
      <source src={`http://techslides.com/demos/sample-videos/${props.src}.webm`} type="video/webm" />
      <source src={`http://techslides.com/demos/sample-videos/${props.src}.ogv`} type="video/ogg" />
      <source src={`http://techslides.com/demos/sample-videos/${props.src}.mp4`} type="video/mp4" />
      <source src={`http://techslides.com/demos/sample-videos/${props.src}.3gp`} type="video/3gp" />
    </video>
  );
});

export default video;

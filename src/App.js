import React from "react";
import "./App.css";
import Girl from "./girl_sprite.png";

import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const { ref: cyclist, getAnimation: cyclistAnim } = useWebAnimations({
    keyframes: [
      { transform: "translate(0, 20px)" },
      { transform: "translate(2000px, 20px)" },
    ],
    timing: {
      duration: 8000,
      iterations: Infinity,
    },
  });
  const { ref: tree, getAnimation: treeAnim } = useWebAnimations({
    keyframes: [
      { transform: "translate(500px, 0)" },
      { transform: "translate(-1200px, 0)" },
    ],
    timing: {
      duration: 8000,
      iterations: Infinity,
    },
  });
  const { ref: girl, getAnimation: girlAnim } = useWebAnimations({
    keyframes: [
      { transform: "translate(0, 0%)" },
      { transform: "translate(0, -100%)" },
    ],
    timing: {
      easing: "steps(8, end)",
      direction: "reverse",
      duration: 3000,
      playbackRate: 1,
      iterations: Infinity,
    },
  });
  const animation = girlAnim();
  const animation1 = cyclistAnim();
  const animation2 = treeAnim();
  // setTimeout(function () {
  //   /* Set decay */
  //   adjustplayBack();
  // }, 3000);
  function adjustplayBack() {
    animation.updatePlaybackRate(1);
    animation1.updatePlaybackRate(1);
    animation2.updatePlaybackRate(1);
  }
  var goFaster = function () {
    animation.updatePlaybackRate(animation.playbackRate * 1.25);
    animation1.updatePlaybackRate(animation1.playbackRate * 1.1);
    animation2.updatePlaybackRate(animation2.playbackRate * 1.2);
  };

  return (
    <>
      <div className="wrapper" onClick={() => goFaster()}>
        <div className="sky"></div>
        <div className="earth"></div>
        <div id="girl">
          <img src={Girl} ref={girl} id="girl_sprite" alt="" height="2000px" />
        </div>

        <img
          ref={cyclist}
          src="https://1.bp.blogspot.com/-hjgfxUW1o1g/Xck--XOdlxI/AAAAAAAAT_4/JWYFJl83usgRFMvRfoKkSDGd--_Sv04UQCLcBGAsYHQ/s1600/cyclist.gif"
          alt=""
          id="cyclist"
          height="250px"
        />
        <img
          src="https://pngimg.com/uploads/grass/grass_PNG10855.png"
          alt=""
          className="tree"
          height="50px"
        />
        <img
          ref={tree}
          src="https://lh3.googleusercontent.com/proxy/-Hib3E5zBRZVEaijND_nP1x4IHbtUwIvPdiGQ1lxdFdAG0I5-vMd-PBSnW-lINAQttfniqLsVV7mGC93184r50o6Px6GZsQ"
          alt=""
          className="bigTree"
          height="300px"
        />
      </div>
      <button onClick={() => adjustplayBack()}>Reset</button>
    </>
  );
};

export default App;

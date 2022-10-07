export const getScreenSize = () => {
  return window.innerWidth < 768 //|| window.innerHeight < 650
    ? "mobile"
    : window.innerWidth >= 1024 //&& window.innerHeight > 650
    ? "desktop"
    : window.innerWidth >= 768 && window.innerWidth < 1024
    ? "tablet"
    : null;
};

export const checkActive = ({
  offsetPct,
  lowerBound = 0,
  higherBound = 100,
}) => {
  return offsetPct > lowerBound && offsetPct < higherBound;
};

export const getOffsetPct = (sectionId) => {
  const getTop = (el, extraOffset) => el.offsetTop - extraOffset;
  const getBottom = (el, extraOffset) =>
    getTop(el, extraOffset) + el.offsetHeight - extraOffset;

  const offset = window.pageYOffset;
  const secElement = document.getElementById(sectionId);
  if (!secElement) return;
  const topTrigger = getTop(secElement, 30);
  const bottomTrigger = getBottom(secElement, 30);

  let offsetPct = Math.round(
    (100 * (offset - topTrigger)) / (bottomTrigger - topTrigger)
  );
  //offsetPct =  (offsetPct < 0) ? 0 :  (offsetPct> 100) ? 100 : offsetPct;
  return offsetPct;
};

export type WindowSize = "desktop" | "tablet" | "mobile";
export interface AnimationObject {
  triggerPct: number;
  animation?: any;
  windowSizes?: Array<WindowSize>;
  triggerPcts?: any;
  noRepeat?: boolean;
}

export interface AnimationHandlerInterface {
  offsetPct: any;
  animationList: any;
  inFocus?: boolean;
  //windowSize: string;
  //componentState?: string;
}
export const animationHandler = ({
  offsetPct,
  animationList,
  inFocus=false,
}: AnimationHandlerInterface) => {
  const windowSize = getScreenSize();
  animationList.forEach((animation, i) => {
   
    // If it is running, do nothing
    if (animation.animation.playState == "running") return;
    // Reseting based on window size - Check if it is not active in the current window size
    if (animation.windowSizes && !animation.windowSizes.includes(windowSize)) {
      // If it is not active but already ran, reverse it so it resets to it's original state
      if (
        animation.animation.playState == "finished" &&
        animation.animation.playbackRate !== -1 &&
        animation.animation.playState !== "running"
      ) {
        animation.animation.reverse();
      }
      return;
    }
    // If it isn't repeated and has run, do nothing
    if (animation.animation.playState == "finished" && animation.noRepeat)
    return;


    let triggerPct =
      animation.triggerPcts && windowSize in animation.triggerPcts
        ? animation.triggerPcts[windowSize]
        : animation.triggerPct;
  
    
   
    // If it is greater than offset pct
    if ((inFocus || offsetPct >= triggerPct) &&
        animation.animation.playState == "paused"
    ) {
        animation.animation.play();
    }
    // Check End
    else if (
      animation.animation.playState == "finished" &&
      (((!inFocus && offsetPct < triggerPct) && animation.animation.playbackRate == 1)
        || ((inFocus ||offsetPct >= triggerPct) && animation.animation.playbackRate == -1))
    ) {
      animation.animation.reverse();
    }
  });

  return null;
};

export const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

// if (
//   componentState &&
//   animation.componentStates &&
//   !animation.includes(componentState)
// )
//   return;

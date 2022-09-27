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
}

export interface AnimationHandlerInterface {
  offsetPct: any;
  animationList: any;
  //windowSize: string;
  //componentState?: string;
}
export const animationHandler = ({
  offsetPct,
  animationList,
}: AnimationHandlerInterface) => {
  const windowSize = getScreenSize();
  animationList.forEach((animation, i) => {
    // Check Start
    let triggerPct = (animation.triggerPcts && windowSize in animation.triggerPcts ) ? animation.triggerPcts[windowSize] : animation.triggerPct;
    if (animation.windowSizes && !animation.windowSizes.includes(windowSize)) {
      if (
        animation.animation.playState == "finished" &&
        animation.animation.playbackRate !== -1 &&
        animation.animation.playState !== "running"
      ) {
        animation.animation.reverse();
      }
      return;
    }
 
    if (animation.animation.playState == "running") return;
    if (
      offsetPct > triggerPct &&
      ((animation.animation.playbackRate == -1 &&
        animation.animation.playState == "finished") ||
        animation.animation.playState == "paused")
    ) {
      /// console.log("an started", animation.animation )
      if (
        animation.animation.playbackRate == -1 &&
        animation.animation.playState == "finished"
      ) {
        animation.animation.reverse();
      } else {
        //console.log("an started", animation.animation )
        animation.animation.play();
      }
    }
    // Check End
    else if (
      offsetPct < triggerPct &&
      animation.animation.playState == "finished" &&
      animation.animation.playbackRate == 1
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
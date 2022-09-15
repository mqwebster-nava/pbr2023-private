
export const getOffsetPct = (sectionId) => {
    const getTop = (el, extraOffset)=>el.offsetTop - extraOffset;
    const getBottom = (el, extraOffset)=>getTop(el,extraOffset)+ el.offsetHeight - extraOffset;
    
    const offset = window.pageYOffset;
    const secElement = document.getElementById(sectionId);
    if(!secElement) return;
    const topTrigger =  getTop(secElement, 30);
    const bottomTrigger =  getBottom(secElement, 30)
  
    let offsetPct =  Math.round(
      (100 * (offset - topTrigger)) /
        (bottomTrigger - topTrigger)
    );
    //offsetPct =  (offsetPct < 0) ? 0 :  (offsetPct> 100) ? 100 : offsetPct;
    return offsetPct;
}
  

//type AnimationStatus = 'at start' | 'in progress' | 'completed';
export interface AnimationObject {
  triggerPct: number;
  animation?: any;
}

export interface AnimationHandlerInterface {
  offsetPct: any;
  animationList: any;
}
export const animationHandler = ({
  offsetPct,
  animationList,
}: AnimationHandlerInterface) => {
  animationList.forEach((animation, i) => {
    // Check Start
    if (animation.animation.playState == 'running') return;
    if (
      offsetPct > animation.triggerPct &&
      ((animation.animation.playbackRate == -1 &&
        animation.animation.playState == 'finished') ||
        animation.animation.playState == 'paused')
    ) {
       /// console.log("an started", animation.animation )
      if (
        animation.animation.playbackRate == -1 &&
        animation.animation.playState == 'finished'
      ) {
        animation.animation.reverse();
      } else {
        //console.log("an started", animation.animation )
        animation.animation.play();
      }
    }
    // Check End
    else if (
      offsetPct < animation.triggerPct &&
      animation.animation.playState == 'finished' &&
      animation.animation.playbackRate == 1
    ) {
      animation.animation.reverse();
    }

    // Check Reverse

    // Check Reset
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
  }
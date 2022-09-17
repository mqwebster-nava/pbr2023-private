
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
  

export type WindowSize = 'desktop' | 'tablet' | 'mobile';
export interface AnimationObject {
  triggerPct: number;
  animation?: any;
  windowSizes?: Array<WindowSize>
  componentStates?:Array<string>
}

export interface AnimationHandlerInterface {
  offsetPct: any;
  animationList: any;
  windowSize:string;
  componentState?:string
}
export const animationHandler = ({
  offsetPct,
  animationList,
  windowSize,
  componentState=null

}: AnimationHandlerInterface) => {
  animationList.forEach((animation, i) => {
    // Check Start
   
    if(animation.windowSizes && !animation.windowSizes.includes(windowSize)) {
      if(animation.animation.playState == 'finished' && animation.animation.playbackRate !== -1  && animation.animation.playState !== 'running'){animation.animation.reverse()}
      return;
    }
    if(componentState && animation.componentStates && !animation.includes(componentState)) return;
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
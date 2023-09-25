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
    return offsetPct;
  };
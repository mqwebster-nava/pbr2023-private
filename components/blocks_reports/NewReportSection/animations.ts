
export const makeSlideUpAnimation = (elementId, delay) => {
    let an = document.getElementById(elementId).animate(
      [
        { transform: "translateY(20%)", opacity: "0%" },
        { transform: "translateY(0%)", opacity: "100%" },
      ],
      {
        duration: 300,
        iterations: 1,
        fill: "forwards",
        delay: delay,
      }
    );
    an.pause();
    return an;
  };
  

 export const makeFadeAnimation = (elementId, delay, duration) => {
    const an = document
      .getElementById(elementId)
      .animate([{ opacity: "100%" }, { opacity: "0%" }], {
        duration: duration,
        iterations: 1,
        fill: "forwards",
        delay:delay
      });
    an.pause();
    return an;
  };

  export const makeFadeInAnimation = (elementId, delay) => {
    const an = document
      .getElementById(elementId)
      .animate([{ opacity: "0%" }, { opacity: "100%" }], {
        duration: 200,
        iterations: 1,
        fill: "forwards",
        delay: delay
      });
    an.pause();
    return an;
  };
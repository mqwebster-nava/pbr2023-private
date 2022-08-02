import { useState, useEffect } from 'react';

export default function useCurrentSectionHook(h2Sections) {
  
  const [activeSection, setActiveSection] = useState(null);
  
  useEffect(() => {
    
    h2Sections.forEach((h2) => {
      if (h2.ref.current){
        const extraOffset = "extraOffset" in h2? h2.extraOffset : 30
        h2.triggerTop = h2.ref.current.offsetTop-extraOffset; //- window.innerHeight/2;
        h2.triggerBottom = h2.triggerTop +  h2.ref.current.offsetHeight-extraOffset;// - 5;
      }
    });
    const onScroll = () => {
      const offset = window.pageYOffset;
      h2Sections.forEach((h2) => {
        if(offset>h2.triggerTop && offset<h2.triggerBottom && activeSection!=h2.titleId ){
          setActiveSection(h2.titleId); return;
        }
      });
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });


  return activeSection;
}
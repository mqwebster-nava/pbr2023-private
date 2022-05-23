import { useState, useEffect } from 'react';

export default function useCurrentSectionHook(h2Sections, useId = false) {
  
  const [activeSection, setActiveSection] = useState(null);
  
  useEffect(() => {
    
    h2Sections.forEach((h2) => {
      if (h2.ref.current){
        h2.triggerTop = h2.ref.current.offsetTop-30; //- window.innerHeight/2;
        h2.triggerBottom = h2.triggerTop +  h2.ref.current.offsetHeight-30;// - 5;
      }
    });
    const onScroll = () => {
      const offset = window.pageYOffset;
      h2Sections.forEach((h2) => {
        if(offset>h2.triggerTop && offset<h2.triggerBottom && activeSection!=h2.title ){
          setActiveSection(useId ? h2.titleId : h2.title); return;
        }
      });
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });


  return activeSection;
}
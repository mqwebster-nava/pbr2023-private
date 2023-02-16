// A react hook that stores the posts to display based on the filter settings.

import { useState, useEffect } from "react";
import { clearArrays } from "utils/utils";

export default function useFilteredPosts(
  allPosts,
  categories,
  filterable
) {
  const [displayedPosts, setDisplayedPosts] = useState(allPosts);
  const [filterBarState, setFilterBarState] = useState(clearArrays(categories));

  useEffect(() => {
    if (!filterable) return;
    let _items = allPosts;
    // get keys of filterBarState and iterate over them
    Object.keys(filterBarState).forEach((key) => {
      if (filterBarState[key].length < 1) return;

      if (key == "Type") {
        _items = _items.filter((it) => {
          return (
            it.contentType && filterBarState["Type"].includes(it.contentType)
          );
        });
      } else {
        _items = _items.filter((it) => {
          return (
            it.contentTags &&
            it.contentTags.some((tag) => filterBarState[key].includes(tag))
          );
        });
      }
    });
    if (_items !== displayedPosts) setDisplayedPosts(_items);
  }, [filterBarState]);

  const getCount = (type, item) => {
    if(!type || !item) return displayedPosts?.length;
    let l =  type=="Type" ? allPosts?.filter((post)=>post.contentType==item):
             allPosts?.filter((post)=>post.contentTags&&post.contentTags.includes(item));

    Object.keys(categories).map((cat)=>{ 
      if(cat!==type && filterBarState[cat].length>0){
        if(cat=="Type"){
          l = l.filter((post)=>filterBarState[cat].includes(post.contentType))
        } 
        else{
          l = l.filter((post)=>post?.contentTags?.some((tag)=>filterBarState[cat].includes(tag)));
        }
      }

    });
    return l.length;

  }



  return [displayedPosts, filterBarState, setFilterBarState, getCount];

}
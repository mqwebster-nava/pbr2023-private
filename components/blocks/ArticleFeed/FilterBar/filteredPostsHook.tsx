// A react hook that stores the posts to display based on the filter settings.

import { useState, useEffect } from "react";
import { clearArrays } from "utils/utils";
import { useRouter } from 'next/router';

const filterPosts = (posts, filters) => {
  const _filters = {...filters}
  let _items = posts;

  // get keys of filterBarState and iterate over them
  Object.keys(_filters).forEach((key) => {
    if (_filters[key].length < 1) return;

    if (key == "Type") {
      _items = _items.filter((it) => {
        return it.contentType && _filters["Type"].includes(it.contentType);
      });
    } else {
      _items = _items.filter((it) => {
        return (
          it.contentTags &&
          it.contentTags.some((tag) => _filters[key].includes(tag))
        );
      });
    }
  });
  return _items;
};

export const getActiveFilters = ({ filters, changes }) => {
  //let newFilterBarState = { ...filters };
  let newFilterBarState = {}
  Object.keys(filters).forEach((key) => {
    newFilterBarState[key] = [...filters[key]];
  });
  
  changes.forEach((change) => {
    if (
      change.checkboxElement.checked &&
      !filters[change.type].includes(change.name)
    ) {
      newFilterBarState[change.type].push(change.name);
      // Add an event here to track the filter
    } else if (!change.checkboxElement.checked) {
     // console.log(change.name, "change.name")
      newFilterBarState[change.type] = newFilterBarState[change.type].filter(
        (n) => change.name != n
      );
    }
  });
 // console.log(newFilterBarState, "newFilterBarState")
  return newFilterBarState;
};
const filterOverlap = ({ posts, filters, type, item }) => {
  const _filters = {...filters}
  const _posts = [...posts]
  let l =
    type == "Type"
      ? _posts?.filter((post) => post.contentType == item)
      : _posts?.filter(
          (post) => post.contentTags && post.contentTags.includes(item)
        );

  Object.keys(_filters).map((cat) => {
    if (cat !== type && _filters[cat].length > 0) {
      if (cat == "Type") {
        l = l.filter((post) => _filters[cat].includes(post.contentType));
      } else {
        l = l.filter((post) =>
          post?.contentTags?.some((tag) => _filters[cat].includes(tag))
        );
      }
    }
  });
  return l;
};

export default function useFilteredPosts(allPosts, categories, filterable) {

  
  
  // Want to get existing filter settings from the URL

  // Want to set the filterBarState from those filters in the URL or set it to the default state

  // Want to set the displayedPosts based on the filterBarState
  const [displayedPosts, setDisplayedPosts] = useState(allPosts);
  const [filterBarState, setFilterBarState] = useState(clearArrays(categories));




  useEffect(() => {
    
    if (!filterable) return;
    let _items = filterPosts(allPosts, {...filterBarState});
    if (_items !== displayedPosts) {
      setDisplayedPosts(_items);
    }
  }, [filterBarState]);

  const getCount = ({ type=null, item=null }) => {
    const _filters = {...filterBarState};
    // if(changeLog!=undefined && (!type || !item)) {
    //   const active = getActiveFilters({filters: _filters, changes: changeLog});
    //   return filterPosts(allPosts,active).length;
    // }
    if (!type || !item) return displayedPosts?.length;
   // if(changeLog!=undefined)return filterOverlap({ posts: allPosts, filters: getActiveFilters({filters: _filters, changes: changeLog}), type, item }).length
    return filterOverlap({ posts: allPosts, filters: _filters, type, item }).length
  };

  
  return [displayedPosts, filterBarState, setFilterBarState, getCount];
}


//  const router = useRouter();
//const query = router.query;

  // const setFilterBarState = (newFilterBarState) => {
  //   let filterBarStateFromUrl = {}
  // Object.keys(categories).forEach((category) => {
  //   console.log(query, category, "q")
  //   const values = (category in query) && query[category];
  //   console.log(values, "v")
  //   filterBarStateFromUrl[category] = (values) ? values.split(',') : [];
  // });

  //   _setFilterBarState(filterBarStateFromUrl)

  // }
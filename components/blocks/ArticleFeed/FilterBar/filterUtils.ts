import { combineArrays } from "utils/utils"



export const hasActiveFilters = (filterBarState) =>{
    return combineArrays(filterBarState).length > 0
}

export const getActiveFilters = (filterBarState) => {
    return combineArrays(filterBarState)
}
export const getActiveLength = (filterBarState) => {
    return combineArrays(filterBarState).length
}




import type { HTMLAttributes } from 'react'

export interface RepeaterProps extends HTMLAttributes<HTMLDivElement> {
    isVariant?: boolean
  }

export default function LeftRepeater() {
    return ( <div>  <b>Left Repeater </b> </div>  );
}
  
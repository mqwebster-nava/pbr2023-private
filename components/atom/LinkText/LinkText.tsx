import { icolor } from "utils/theme";

export interface  LinkTextProps  {
  href: string; 
}

export const LinkText: React.FC<LinkTextProps> = ({ children, href }) => {
  return (
    <a className={`text-sage-dark hover:text-sage-base underline`} href={href}  target="_blank"  >{children}</a>
  )
}

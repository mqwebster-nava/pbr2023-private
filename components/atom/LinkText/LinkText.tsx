import { icolor } from "utils/theme";

export interface  LinkTextProps  {
  href: string; 
}

export const LinkText: React.FC<LinkTextProps> = ({ children, href }) => {
  return (
    <a className={`text-gold-dark hover:text-gold-base underline`} href={href}  target="_blank"  >{children}</a>
  )
}

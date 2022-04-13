
export interface  LinkTextProps  {
  href: string; 
}

export const LinkText: React.FC<LinkTextProps> = ({ children, href }) => {
  const target = (href.substr(0,1)==="/") ? "" : "_blank"
  return (
    <a className={`text-sage-dark hover:text-sage-base underline`} href={href}  target={target}  >{children}</a>
  )
}

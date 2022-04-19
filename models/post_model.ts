
export interface ContentfulImageAsset{
  id:string;
  url:string;
  width?:Number;
  height?:Number;
  title?:string;
  description?:string;
}
export interface BasicPostInterface{
    id:string;
    slug:string;
    title:string;
    date:string;
    contentType:string;
    clientName:string;
    contentTags:Array<string>;
    shortSummary:string;
    promoImage:ContentfulImageAsset;
}
export interface FullPostInterface extends BasicPostInterface{
    longSummary:string;
    hideSideNav:boolean;
    authors:Array<AuthorPostInterface>;
    body:any;
}

export interface AuthorPostInterface{
    name:string;
    slug:string;
    role?:string;
    bio?:string;
    posts?:Array<BasicPostInterface>;
}



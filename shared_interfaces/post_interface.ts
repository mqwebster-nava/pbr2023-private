
export interface ContentfulImageAsset{
  id:string;
  url:string;
  width?:number;
  height?:number;
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
    leadImage:ContentfulImageAsset;
}

export interface AuthorPostInterface{
    name:string;
    slug:string;
    role?:string;
    bio?:string;
    image?: ContentfulImageAsset;
    posts?:Array<BasicPostInterface>;
}




type BannerColor = "plum" | "purple" | "navy" | "sage" | "gold";
export interface PageComponentInterface {
  title: string;
  body: string;
  buttonText?: string;
  buttonUrl?: string;
  componentType: string;
}
export interface PageHeaderInterface {
  
  title?: string;
  subtitle?:string;
  bannerColor?:BannerColor;
  //backgroundImage:any;
}

export interface PageInterface {
  id: string;
  slug: string;
  title: string;
  description: string;
  pageHeader: PageHeaderInterface;
  contentBlocks: any;
}

export interface PageProps   {
    page:PageInterface,
    preview:boolean
}

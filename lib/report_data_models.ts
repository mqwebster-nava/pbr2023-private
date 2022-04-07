export interface ReportThemeInterface {
  sage: {
    text: string;
    background: string;
  };
  default: {
    text: string;
    background: string;
  };
}

export interface ReportContentInterface {
  content: string;
  theme: ReportThemeInterface;
  isGreenBG: boolean;
}

export interface ReportIntroSection {
  body: string;
  theme: ReportThemeInterface;
  isWhiteBG: boolean;
}

export interface ReportSectionInterface {
  picture: string;
  picture_position: string;
  content: {
    title: string;
    introduction: string;
    body: string;
  };
  isWhiteBG: boolean;
  theme: ReportThemeInterface;
  isGreenBG: boolean;
}

export interface ReportShoutoutSection {
  title: string;
  introduction: string;
  lists: Array<object>;
  theme: ReportThemeInterface;
}

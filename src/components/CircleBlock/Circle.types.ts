import { HeadlineTitle } from "../../constans/headlineTitles";

export interface ICircleTitleItem {
  itemTitle: HeadlineTitle;
  activeItemTitle: HeadlineTitle;
  onChangeActiveItem: (itemTitle: HeadlineTitle) => void;
}

export interface ICircleTitle {
  activeItemTitle: HeadlineTitle;
  onChangeActiveItem: (itemTitle: HeadlineTitle) => void;
}

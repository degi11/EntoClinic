import { StaticImageData } from "next/image";

export interface Expert {
  name: string;
  experience: string;
  image: StaticImageData;
  credentials: string;
  expertise: string[];
}
export interface LinkItem {
  href: string;
  title: string;
}

export interface LinkListProps {
  items: LinkItem[];
  flexRow?: boolean;
}

export interface ItemProps {
  title: string;
  text: string;
  index: number;
}

export interface TitleCenterProps {
  title: string;
  text: string;
  classname?: string;
  classnameTitle?: string;
  classnameText?: string;
}

export interface DateProps {
  formattedDate?: string;
}

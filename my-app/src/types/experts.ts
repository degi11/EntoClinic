export interface Expert {
  name: string;
  experience: string;
  image: string;
  credentials: string;
  expertise: string[];
}

export interface TitleCenterProps {
  title: string;
  text?: string;
  classname?: string;
  classnameTitle?: string;
  classnameText?: string;
}

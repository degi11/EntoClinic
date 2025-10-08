import { TitleCenterProps } from "@/types/experts";

export default function TitleCenter({
  title,
  text,
  classname,
  classnameTitle,
  classnameText,
}: TitleCenterProps) {
  return (
    <div className={`text-center mb-16 ${classname || ""}`}>
      <h2
        className={`text-3xl lg:text-4xl font-bold ${
          classnameTitle || ""
        } mb-4`}
      >
        {title}
      </h2>
      <p className={`text-lg  max-w-2xl mx-auto ${classnameText || ""}`}>
        {text}
      </p>
    </div>
  );
}

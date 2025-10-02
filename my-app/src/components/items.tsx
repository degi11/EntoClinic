type ItemProps = {
  title: string;
  text: string;
  index: number;
};

export default function Item({ title, text, index }: ItemProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        {index + 1}. {title}
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">{text}</p>
    </div>
  );
}

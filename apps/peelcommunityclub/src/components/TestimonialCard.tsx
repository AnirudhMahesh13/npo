interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 border border-gray-100">
      <p className="text-xl italic text-text mb-6 leading-relaxed">"{quote}"</p>
      <p className="font-bold text-primary text-lg mb-1">{author}</p>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
};

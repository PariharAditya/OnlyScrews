import { Star } from "lucide-react";

interface TestimonialCardProps {
  rating: number;
  title: string;
  excerpt: string;
  customerName: string;
  timeAgo: string;
  productImage: string;
  productName: string;
}

const TestimonialCard = ({
  rating,
  title,
  excerpt,
  customerName,
  timeAgo,
  productImage,
  productName,
}: TestimonialCardProps) => {
  return (
    <div className="flex-shrink-0 w-[280px] p-6 flex flex-col items-center text-center space-y-4 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="space-y-2 flex-grow">
        <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{excerpt}</p>
      </div>

      <div className="space-y-1">
        <p className="font-medium text-gray-900">{customerName}</p>
        <p className="text-xs text-gray-500">{timeAgo}</p>
      </div>

      <div className="pt-4 border-t border-gray-200 w-full">
        <img
          src={productImage}
          alt={productName}
          className="w-16 h-16 object-contain mx-auto mb-2"
        />
        <p className="text-xs text-gray-600 hover:text-blue-600 transition-colors cursor-pointer line-clamp-1">
          {productName}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;

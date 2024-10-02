import { FC } from 'react'
import { Link } from 'react-router-dom'

interface ProductCardProps {
  id: string | number
  title: string
  author: string
  cover: string
  onDelete: () => void
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  author,
  cover,
  onDelete,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={cover} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <h4 className="text-sm text-gray-600 mt-2">{author}</h4>
        <div className="flex items-center gap-10">
          <button
            onClick={onDelete}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
          >
            Delete
          </button>
          <Link to={`/`} className="block mt-4 text-blue-500 hover:underline">
            See Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

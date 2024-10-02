import { FC } from 'react'
import { Book } from '../App'
import ProductCard from './ProductCard'

interface ProductListProps {
  books: Book[]
  onDelete: (id: number) => void
}

const ProductList: FC<ProductListProps> = ({ books, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {books.map((book) => (
        <ProductCard
          id={book.id}
          key={book.id}
          title={book.title}
          author={book.author}
          cover={book.cover}
          onDelete={() => onDelete(book.id)}
        />
      ))}
    </div>
  )
}

export default ProductList

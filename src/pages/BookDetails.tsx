interface Book {
  id: number
  title: string
  author: string
  cover: string
  short_description: string
}

const book = {
  title: 'Book 1',
  author: 'Author 1',
  cover: '',
  short_description: 'hello',
}

const BookDetails = () => {
  return (
    <div className="container mx-auto mt-10">
      {book ? (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-10">
          <img
            src={book.cover}
            alt={book.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {book.title}
            </h3>
            <h4 className="text-sm text-gray-600 mt-2">{book.author}</h4>
            <p className="text-sm text-gray-800 mt-2">
              {book.short_description}
            </p>
          </div>
        </div>
      ) : (
        <div>Book not found</div>
      )}
    </div>
  )
}

export default BookDetails

import { useEffect, useState } from 'react'
import BookForm from '../components/BookForm'
import ProductList from '../components/ProductList'
import { API_URL } from '../config'

export interface Book {
  id: number
  title: string
  author: string
  cover: string
}

function Home() {
  const [books, setBooks] = useState<Book[]>([])

  // Function to fetch the books
  const fetchBooks = async () => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      setBooks(data.data.books)
    } catch (error) {
      console.error('Error fetching books:', error)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const handleAddBook = async (newBook: {
    title: string
    author: string
    cover: string
  }) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      })

      if (response.ok) {
        const addedBook = await response.json()
        setBooks([addedBook.data.newBook, ...books])
      } else {
        console.error('Failed to add the book')
      }
    } catch (error) {
      console.error('Error adding book:', error)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`${URL}/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setBooks(books.filter((book) => book.id !== id))
      } else {
        console.error('Failed to delete the book')
      }
    } catch (error) {
      console.error('Error deleting book:', error)
    }
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        My Books Collection
      </h1>

      {/* Using the BookForm component */}
      <BookForm onSubmit={handleAddBook} />

      {/* List of books */}
      <ProductList books={books} onDelete={handleDelete} />
    </div>
  )
}

export default Home

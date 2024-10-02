import { FormEvent, useState } from 'react'
import Button from './Button'
import Input from './Input'

interface BookFormProps {
  onSubmit: (book: { title: string; author: string; cover: string }) => void
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit }) => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    cover: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(newBook)
    setNewBook({ title: '', author: '', cover: '' })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 bg-gray-50 p-6 rounded-lg border border-green-200"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Book</h2>

      <Input
        type="text"
        label="Title"
        value={newBook.title}
        name="title"
        placeholder="Enter book title"
        onChange={handleChange}
      />

      <Input
        type="text"
        label="Author"
        value={newBook.author}
        name="author"
        placeholder="Enter book author"
        onChange={handleChange}
      />

      <Input
        type="text"
        label="Cover Image URL"
        value={newBook.cover}
        name="cover"
        placeholder="Enter cover image URL"
        onChange={handleChange}
      />

      <div className="mt-8">
        <Button>Add Book</Button>
      </div>
    </form>
  )
}

export default BookForm

import { useState, FormEvent } from 'react'
import Input from '../components/Input'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    if (email && password) {
      // login user
    } else {
      setError('Please enter your email and password.')
    }
  }

  return (
    <div className="my-16">
      <form
        onSubmit={handleLogin}
        className="max-w-sm mx-auto p-6 bg-white rounded-lg border border-green-200"
      >
        <h2 className="text-xl font-semibold mb-4">Login</h2>

        <Input
          type="email"
          label="Email"
          value={email}
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          error={error}
        />

        <Input
          type="password"
          label="Password"
          value={password}
          name="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          error={error}
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login

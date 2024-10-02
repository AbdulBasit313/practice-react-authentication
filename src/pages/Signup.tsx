import { useState, FormEvent } from 'react'
import Input from '../components/Input'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault()

    if (email && password && password === confirmPassword) {
      console.log('Signing up with:', { email, password })
      // Here, you would send a request to your sign-up API
      // If successful, handle success (e.g., redirect, set user context)
    } else {
      setError('Please make sure passwords match and fields are filled.')
    }
  }

  return (
    <div className="my-16">
      <form
        onSubmit={handleSignUp}
        className="max-w-sm mx-auto p-6 bg-white rounded-lg border border-green-200"
      >
        <h2 className="text-xl font-semibold mb-4">Sign Up</h2>

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

        <Input
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          name="confirmPassword"
          placeholder="Confirm your password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={error}
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUp

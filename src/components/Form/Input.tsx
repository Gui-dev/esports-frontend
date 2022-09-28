import React, { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {}

export const Input = (props: InputProps) => {
  return (
    <input
      className="text-sm py-3 px-4 bg-zinc-900 rounded placeholder:text-zinc-500"
      {...props}
    />
  )
}

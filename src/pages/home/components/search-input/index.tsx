import { Input } from './styles'

interface SearchInputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <Input
      type="text"
      placeholder="Search for content"
      value={value}
      onChange={onChange}
    />
  )
}

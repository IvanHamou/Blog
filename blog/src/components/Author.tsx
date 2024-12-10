interface AuthorProps {
  name: string
}

export default function Author({ name }: AuthorProps) {
  return <p className="text-sm text-gray-600">Written by {name}</p>
}


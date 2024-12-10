interface CommentProps {
  body: string
}

export default function Comment({ body }: CommentProps) {
  return <p className="bg-gray-100 p-2 rounded mb-2">{body}</p>
}


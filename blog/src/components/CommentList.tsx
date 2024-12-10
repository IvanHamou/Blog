import Comment from './Comment'

interface CommentListProps {
  comments: { id: number; body: string }[]
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      {comments.map((comment) => (
        <Comment key={comment.id} body={comment.body} />
      ))}
    </div>
  )
}


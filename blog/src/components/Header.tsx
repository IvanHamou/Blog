export default function Header() {
  return (
    <header className="py-4">
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-blue-500 hover:text-blue-700">Home</a></li>
          <li><a href="/about" className="text-blue-500 hover:text-blue-700">About</a></li>
        </ul>
      </nav>
    </header>
  )
}


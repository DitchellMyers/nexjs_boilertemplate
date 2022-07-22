import { FunctionComponent } from 'react'

interface LinkItem {
  id: number
  name: string
  route: string
}

type Navigation = {
  Links: LinkItem[]
}

const Navigation: FunctionComponent<Navigation> = ({ Links }) => {
  return (
    <div>
      {Links.map((link) => (
        <div key={link.id}>{link.name}</div>
      ))}
    </div>
  )
}

export default Navigation

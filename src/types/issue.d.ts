interface Issue {
  number: number
  title: string
  body: string
  created_at: string
  state: "open" | "close"
  comments: number
  user: User
  labels: {
    name: string
    [key: string]: any
  } []
  [key: string]: any
}
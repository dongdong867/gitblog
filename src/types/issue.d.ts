interface Issue {
  number: number
  title: string
  body: string
  created_at: string
  state: "open" | "closed"
  comments: number
  user: User
  labels: Label[]
  [key: string]: any
}
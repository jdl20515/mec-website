import { redirect } from "next/navigation"

const applicationFormUrl = "https://forms.gle/5YnXXzHW6hZj4awv9"

export default function ApplyPage() {
  redirect(applicationFormUrl)
}

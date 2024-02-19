import Card from "@/app/components/Card"
import Link from "next/link"

const NotificationPage = () => {
  return (
    <Card>
      <div>
      NotificationPage
      </div>
      <div>
        <Link href='/dashboard/archived'>Archived</Link>
      </div>
    </Card>
  )
}

export default NotificationPage

import type { Metadata } from "next"
import { TermsContent } from "./terms-content"

export const metadata: Metadata = {
  title: "Terms & Conditions | ZRAX SOFTWARES",
  description:
    "Review the Terms & Conditions governing the use of ZRAX SOFTWARES services, including payment terms, prohibited activities, intellectual property, and legal agreements.",
  openGraph: {
    title: "Terms & Conditions | ZRAX SOFTWARES",
    description:
      "Review the Terms & Conditions governing the use of ZRAX SOFTWARES services.",
    type: "website",
    siteName: "ZRAX SOFTWARES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | ZRAX SOFTWARES",
    description:
      "Review the Terms & Conditions governing the use of ZRAX SOFTWARES services.",
  },
}

export default function TermsPage() {
  return <TermsContent />
}

import Image from 'next/image'
import Link from 'next/link'
import github from "@/public/github.svg"

export default function Github() {
    return (
        <Link href="https://github.com/cnshing/SnooSpoof-backend-api">
          <Image src={github} alt="Github Project"></Image>
        </Link>
    )
}
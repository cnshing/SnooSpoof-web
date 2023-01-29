import Image from 'next/image'
import Link from 'next/link'

export default function Github() {
    return (
        <Link href="https://github.com/cnshing/SnooSpoof-backend-api">
          <Image src="/github.svg" width="47" height="48" alt="Github Project"></Image>
        </Link>
    )
}
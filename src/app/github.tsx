import Image from 'next/image'
import Link from 'next/link'
import GithubIcon from '@/assets/github.png'

export default function Github() {
    return (
        <Link href="https://github.com/cnshing/SnooSpoof-backend-api">
          <Image src={GithubIcon} alt="Github Project"></Image>
        </Link>
    )
}
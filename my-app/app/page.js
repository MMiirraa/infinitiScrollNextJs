import Link from 'next/link'
import cls from './page.module.scss'

export default function Home() {
  return (
    <main className={cls.main}>
      <Link href='/clothingPrices'>Clothing prices</Link>
    </main>
  )
}

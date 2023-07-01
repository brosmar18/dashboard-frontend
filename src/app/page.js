import Image from 'next/image'
import styles from '../styles/page.module.css'
import {Nav, Header, NotesMenu, Footer} from '../components';

export default function Home() {
  return (
   <div className='page'>
    <Nav />
    <Header />
    <NotesMenu />
    <Footer />
   </div>
  )
}

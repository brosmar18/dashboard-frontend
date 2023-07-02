import Image from 'next/image'
import styles from '../styles/page.module.css'
import {Nav, Header, NotesMenu, Footer, NavBar} from '../components';

export default function Home() {
  return (
   <div className='page'>
    <NavBar />
    <Header />
    <NotesMenu />
    <Footer />
   </div>
  )
}

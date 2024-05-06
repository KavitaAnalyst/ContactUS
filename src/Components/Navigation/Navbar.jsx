
import styles from './Navigation.module.css';
const Navbar = () => {
  return (
   <>
   <div className={styles.nav}>
     <nav className='container'>
        <div className="logo">
           
            <img src="src/assets/LogoK.png" alt=""  />
        </div>

          <ul>
            <li>Home</li>
            <li>About </li>
            <li>Contact</li>
          </ul>
    </nav>
   
     </div>
   
   </>
  )
}

export default Navbar
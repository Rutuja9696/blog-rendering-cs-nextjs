import Link from "next/link";
import styles from "../styles/header.module.css";
function Header(props) {
  let header = props.header[0][0];
  return (
    <div>
      <div className={styles.container}>
        <Link href="/">
          <div className={styles.logo}>
            <img
              src={header.company_logo.url}
              alt="logo"
              width={70}
              height={70}
            />
          </div>
        </Link>
        <div className={styles.links}>
          {header.link.map((link) => {
            return (
              <div>
                <Link href={link.href}>
                  <p className={styles.link}>{link.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;

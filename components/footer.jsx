import Link from "next/link";
import styles from "../styles/footer.module.css";

export default function Footer(props) {
  let footer = props.footer[0][0];
  return (
    <div className={styles.container}>
      <p>{footer.copyright_text} </p>
      <div className={styles.socialIcons}>
        {footer.social_links.map((link) => {
          return (
            <Link href={link.link_url.href}>
              <img
                src={link.social_image.url}
                alt={link.link_url.title}
                width={40}
                height={40}
                className={styles.icon}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

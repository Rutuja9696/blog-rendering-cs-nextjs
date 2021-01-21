import Link from "next/link";
// import footerStyles from "../styles/Footer.module.css";
// import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer(props) {
  let footer = props.footer[0][0];
  console.log(footer);
  return (
    <div>
      <p>{footer.copyright_text} </p>
      <ul>
        {footer.social_links.map((link) => {
          return (
            <li>
              <Link href={link.link_url}>
                <a target="_new">
                  <img
                    src={link.social_image.url}
                    alt={link.link_title}
                    width={30}
                    height={30}
                  />
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

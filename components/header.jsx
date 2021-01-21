import Link from "next/link";

function Header(props) {
  let header = props.header[0][0];
  console.log(header);
  return (
    <div>
      <div>
        <Link href="/">
          <div>
            <img
              src={header.company_logo.url}
              alt="logo"
              width={50}
              height={50}
            />
          </div>
        </Link>
        <div>
          <p>
            {header.link.map((link) => {
              return (
                <div>
                  <Link href={link.href}>
                    <a>{link.title}</a>
                  </Link>
                </div>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;

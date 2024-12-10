import Link from "next/link";

const SocialLinks = ({ paragraphClass }) => {
  const socialMediaLinks = [
    {
      id: 1,
      socialmedia: "Facebook",
      link: "https://web.facebook.com/profile.php?id=100087912974628",
    },
    {
      id: 2,
      socialmedia: "Instagram",
      link: "https://www.instagram.com/nartthedesigner/",
    },
    {
      id: 3,
      socialmedia: "Twitter",
      link: "https://x.com/nartistic999",
    },
    {
      id: 4,
      socialmedia: "LinkedIn",
      link: "https://www.linkedin.com/in/daniel-adonis-6485b7202/",
    },
    {
      id: 5,
      socialmedia: "Behance",
      link: "https://www.linkedin.com/in/daniel-adonis-6485b7202/",
    },
  ];

  return (
    <p className={paragraphClass}>
      {socialMediaLinks.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.socialmedia}
          <br />
        </Link>
      ))}
    </p>
  );
};

export default SocialLinks;

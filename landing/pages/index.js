import ThreeJs from "../components/Three";

const skills = [
  "Hardware",
  "Blockchain",
  "Fullstack development",
  "Coffee making",
  "Game Development",
  "Business",
  "The combination of all the above.",
];

const links = [
  {
    link: "https://scucchiero.com",
    label: "scucchiero.com"
  },
  {
    link: "mailto://scucchiero@gmail.com",
    label: "scucchiero@gmail.com"
  },

  {
    link: "https://github.com/scucchiero",
    label: "github.com/scucchiero"
  },
  {
    link: "https://scucchiero.medium.com",
    label: "scucchiero.medium.com"
  },
];

export default () => {
  const a = 2;
  return (
    <div className="container">
      <div className="scene">
        <ThreeJs />
      </div>
      <div className="inner-container">
        <div>
          <p className="name">
            Franco Scucchiero
          </p>
          <p className="tagline">
            Self-taught software wizard and startup savvy
          </p>
          <br />
          My alter-ego is a hardware developer and physics enthusiast.
          <br />
          I have quite a bit of experience in the realms of:
          <ul>
            {
              skills.map((skill, index) => (
                <li key={index}>
                  {skill}
                </li>
              ))
            }
          </ul>

          But the coolest thing about me is that I own the domain for my last name.
          <div className="find-container">
            {
              links.map(({ label, link }, index) => (
                <a href={link} target="_blank" key={index} rel="noreferrer">{label}</a>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

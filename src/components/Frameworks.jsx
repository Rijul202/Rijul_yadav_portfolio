import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "javascript",
    "react",
    "tailwindcss",
    "git",
    "github",
    "html5",
    "css3",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} name={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} name={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, name }) => (
  <img src={src} alt={`${name} logo`} className="duration-200 rounded-sm hover:scale-110" />
);

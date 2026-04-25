import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="Person coding at a desk with multiple monitors"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="custom-scrollbar z-10 w-full max-h-[11rem] overflow-y-auto pr-2 md:max-h-none md:overflow-visible">
            <p className="headtext">Hi, I'm Rijul Yadav</p>
            <p className="subtext">
              I'm a Computer Science and Engineering student at the Indian Institute of Information Technology, Sonepat, currently pursuing my B.Tech degree (2022-2026). With a passion for software development and problem-solving, I've been building projects that combine my technical skills with real-world applications. I'm particularly interested in full-stack web development, network programming, and embedded systems. My experience ranges from building interactive web applications to implementing Software Defined Networks and developing IoT solutions for safety systems. Recently, I have been focused on AI automation engineering, building LLM-driven workflows and agent-based systems using n8n, Claude, and OpenAI APIs. I also work on integrating business tools with webhooks and REST APIs to reduce manual operations and improve execution speed.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              WEB DEVELOPER
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="React"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Node.js"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="MongoDB"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="JavaScript"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Python"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/tailwindcss.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "8deg", top: "15%", left: "62%" }}
              text="n8n"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-12deg", top: "78%", left: "8%" }}
              text="OpenAI API"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "18deg", top: "42%", left: "73%" }}
              text="Claude"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "2%", left: "78%" }}
              text="Gemini API"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-full md:w-[50%]">
            <p className="headtext">Location</p>
            <p className="subtext">
              I'm based in Delhi, and open to remote work opportunities worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-full md:w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              Languages: Java, JavaScript, Python | Frontend: React.js, Next.js, TailwindCSS | Backend: Express.js, Node.js | Databases: MongoDB | Tools: Git, GitHub | AI/LLMs: Claude, OpenAI API, Gemini API, Prompt Engineering, AI Agents, RAG | Automation: n8n, Zapier, Make.com, Webhooks, REST APIs | Cloud: AWS (S3, Lambda) | Integrations: Google Sheets API, Gmail API, Slack API, Apollo, Salesforce, Notion, Airtable
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

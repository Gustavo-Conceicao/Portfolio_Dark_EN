// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  ContainerFlag,
  FlagBrazil,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/my-portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Hello, my name is {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              I{" "}
              <Text as="span" type="heading1" color="brand1">
                love
              </Text>{" "}
              creating and{" "}
              <Text as="span" type="heading1" color="brand1">
                developing
              </Text>{" "}
              projects
            </Text>
            <Text type="body1" color="grey3">
              Discover here in this environment, created especially for you, all
              my projects and technologies
            </Text>
            <Text type="body2" color="grey2">
              • In addition to my 12-year experience as a handball and soccer
              athlete, I served as the coach of the women's handball team at
              AAASE (Academic Athletic Association of Health and Sports -
              UNICAMP) for 1 year. Apart from residing in a shared house for 5
              years, I had incredible experiences, responsibilities, and
              opportunities, including hosting international exchange students
              from all around the world every year, leading to exposure to
              various languages.
            </Text>
            <Text type="body2" color="grey2">
              • 1-year experience as a partnership director at ARULI
              (Association of Unicamp Student Houses in Limeira).
            </Text>
            <Text type="body2" color="grey2">
              • 3-year experience as a director of university and social events
              at ARULI.
            </Text>
            <Text type="body2" color="grey2">
              • Certified chef, with prior experience at major franchises like
              Coco Bambu, eventually managing a local burger joint for 1 year.
            </Text>
            <Text type="body2" color="grey2">
              • Current occupation as a Full Stack Developer, Backend Developer,
              or Frontend Developer.
            </Text>
            <Text type="body2" color="grey2">
              • Technology skills and knowledge encompass:
            </Text>
            <Text type="body2" color="grey2">
              • Best practices in web development
            </Text>
            <Text type="body2" color="grey2">
              • Application of Agile methodologies (Scrum, Kanban)
            </Text>
            <Text type="body2" color="grey2">
              • Proficiency in various technology stacks: HTML, CSS,
              Componentization, UX fundamentals, JavaScript ES6, React.JS,
              Hooks, Redux, Typescript, Next.JS, Node.JS, Express.JS, Git
              version control, Python, Django, TypeORM and Migrations, TDD with
              Jest, BDD with Cucumber, Amazon AWS, Object-Oriented Programming.
            </Text>
            <Text type="body2" color="grey2">
              • Databases: SQL, PostgreSQL, and MongoDB.
            </Text>
            <Text type="body2" color="grey2">
              • Languages: Intermediate English and intermediate Spanish.
            </Text>

            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                See Projects
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                See my portfolio source code
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                My projects
              </Text>
              <Text as="p" type="body1" color="grey2">
                Some of my{" "}
                <Text as="span" color="brand5">
                  side projects
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};

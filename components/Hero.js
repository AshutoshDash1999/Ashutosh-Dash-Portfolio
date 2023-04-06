import {
  Badge,
  Container,
  createStyles,
  Flex,
  keyframes,
  Text,
  Title
} from "@mantine/core";
import Image from "next/image";
import AntdLogo from "public/techlogo/antd.svg";
import BootstrapLogo from "public/techlogo/bootstrap.svg";
import ChakraUiLogo from "public/techlogo/chakraui.svg";
import CSSLogo from "public/techlogo/css.svg";
import FirebaseLogo from "public/techlogo/firebase.svg";
import GithubLogo from "public/techlogo/github.svg";
import HTMLLogo from "public/techlogo/html.svg";
import JSLogo from "public/techlogo/javascript.svg";
import MantineLogo from "public/techlogo/mantine.svg";
import NextLogo from "public/techlogo/nextjs.svg";
import ReactLogo from "public/techlogo/reactjs.svg";
import TailwindLogo from "public/techlogo/tailwindcss.svg";

const colorTransition = keyframes({
  from: {
    color: "#ef4444",
  },
  "5%": {
    color: "#f97316",
  },
  "10%": {
    color: "#f59e0b",
  },
  "15%": {
    color: "#eab308",
  },
  "20%": {
    color: "#84cc16",
  },
  "25%": {
    color: "#22c55e",
  },
  "30%": {
    color: "#10b981",
  },
  "35%": {
    color: "#14b8a6",
  },
  "40%": {
    color: "#22d3ee",
  },
  "45%": {
    color: "#38bdf8",
  },
  "50%": {
    color: "#60a5fa",
  },
  "55%": {
    color: "#6366f1",
  },
  "60%": {
    color: "#8b5cf6",
  },
  "65%": {
    color: "#a855f7",
  },
  "70%": {
    color: "#d946ef",
  },
  "75%": {
    color: "#db2777",
  },
  to: {
    color: "#f43f5e",
  },
});

const borderColorTransition = keyframes({
  from: {
    borderBottomColor: "#ef4444",
  },
  "5%": {
    borderBottomColor: "#f97316",
  },
  "10%": {
    borderBottomColor: "#f59e0b",
  },
  "15%": {
    borderBottomColor: "#eab308",
  },
  "20%": {
    borderBottomColor: "#84cc16",
  },
  "25%": {
    borderBottomColor: "#22c55e",
  },
  "30%": {
    borderBottomColor: "#10b981",
  },
  "35%": {
    borderBottomColor: "#14b8a6",
  },
  "40%": {
    borderBottomColor: "#22d3ee",
  },
  "45%": {
    borderBottomColor: "#38bdf8",
  },
  "50%": {
    borderBottomColor: "#60a5fa",
  },
  "55%": {
    borderBottomColor: "#6366f1",
  },
  "60%": {
    borderBottomColor: "#8b5cf6",
  },
  "65%": {
    borderBottomColor: "#a855f7",
  },
  "70%": {
    borderBottomColor: "#d946ef",
  },
  "75%": {
    borderBottomColor: "#db2777",
  },
  to: {
    borderBottomColor: "#f43f5e",
  },
});

const useStyles = createStyles((theme) => ({
  nameText: {
    animation: `${colorTransition} 15s ease-in-out infinite`,
  },
  title: {
    fontSize: "5rem",
    transition: "all 0.5s",
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "4rem",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: "3rem",
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: "2rem",
    },
  },
  subtitle: {
    fontSize: "3rem",
    transition: "all 0.5s",
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "2rem",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: "1.5rem",
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: "1.3rem",
    },
  },
  descriptionText: {
    transition: "all 0.5s",
  },
  badge: {
    transition: "all 0.5s",
  },
}));

const techStack = [
  {
    name: "HTML",
    color: "orange",
    logo: HTMLLogo,
  },
  {
    name: "CSS",
    color: "blue",
    logo: CSSLogo,
  },
  {
    name: "Tailwind",
    color: "blue",
    logo: TailwindLogo,
  },
  {
    name: "Bootstrap",
    color: "violet",
    logo: BootstrapLogo,
  },
  {
    name: "JavaScript",
    color: "yellow",
    logo: JSLogo,
  },
  {
    name: "React",
    color: "",
    logo: ReactLogo,
  },
  {
    name: "Next.JS",
    color: "gray",
    logo: NextLogo,
  },
  {
    name: "Mantine UI",
    color: "blue",
    logo: MantineLogo,
  },
  {
    name: "Ant Design",
    color: "red",
    logo: AntdLogo,
  },
  {
    name: "Chakra UI",
    color: "cyan",
    logo: ChakraUiLogo,
  },
  {
    name: "GitHub",
    color: "gray",
    logo: GithubLogo,
  },
  {
    name: "Firebase",
    color: "yellow",
    logo: FirebaseLogo,
  },
];

const Hero = () => {
  const { classes } = useStyles();

  return (
    <Container size="xl">
      <Title color="gray.6" order={1} className={classes.title}>
        Hi, I&apos;m <span className={classes.nameText}>Ashutosh Dash</span>,
      </Title>
      <Title order={1} className={classes.subtitle}>
        <Text span color="gray.6">
          A
        </Text>{" "}
        <Text span className={classes.roleText}>
          Frontend Developer.
        </Text>
      </Title>
      <Text
        pt="md"
        fz={{ base: "md", md: "xl" }}
        fw={600}
        color="gray.6"
        className={classes.descriptionText}
      >
        I love to build impactful front-end experiences and love to bring life
        to sketches. I not only just want to create an impact on psychedelic
        experiences but also want to work on positive and authentic
        relationships.
      </Text>

      <Flex wrap="wrap" gap={"md"} py="md">
        {techStack.map((item) => (
          <Badge
            className={classes.badge}
            key={item.name}
            color={item.color}
            radius="sm"
            size="xl"
          >
            <Flex align={"center"} gap="sm" justify={"space-evenly"}>
              <Image
                src={item.logo.src}
                height={20}
                width={20}
                alt={item.name}
                blurDataURL={item.logo.blurDataURL}
              />
              {item.name}
            </Flex>
          </Badge>
        ))}
      </Flex>
    </Container>
  );
};
export default Hero;

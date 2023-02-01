import { Box, Container, createStyles, Flex, Image, Text } from "@mantine/core";
import LinkedinLogo from "public/socialicons/linkedin.svg";
import GitHubLogo from "public/socialicons/github.svg";
import TwitterLogo from "public/socialicons/twitter.svg";
import GMailLogo from "public/socialicons/gmail.svg";
import Link from "next/link";

const socialLinksData = [
  {
    name: "linkedin",
    logo: LinkedinLogo,
    url: "https://www.linkedin.com/in/ashutoshdash1999/",
  },
  {
    name: "github",
    logo: GitHubLogo,
    url: "https://github.com/AshutoshDash1999",
  },
  {
    name: "twitter",
    logo: TwitterLogo,
    url: "https://twitter.com/ashutoshdash99",
  },
  {
    name: "mail",
    logo: GMailLogo,
    url: "mailto:dashashutosh1999@gmail.com",
  },
];

const useStyles = createStyles((theme) => ({
  socialIcon: {
    opacity: "80%",
    transition: "transform 0.7s",
    "&:hover": {
      opacity: "100%",
      transform: "translateY(-5px)",
    },
  },
  helloBtn:{
    transition: "all 0.5s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
    },
  },
  resumeLink:{
    transition: "all 0.5s",
    "&:hover": {
      transform: "translateY(-5px)",
      textShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
    },
  }
}));

const Contact = () => {
  const { classes } = useStyles();

  return (
    <>
      <Container
        size="xl"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[1],
          padding: theme.spacing.xl,
          borderRadius: theme.radius.lg,
        })}
      >
        <Flex justify={"space-between"} align="center">
          <Link href="https://api.whatsapp.com/send/?phone=919348907638&text=Hi%2C+Ashutosh,+I+went+through+your+profile+and+I+really+like+it.+Would+you+mind+sharing+an+opportunity+with+you+?" style={{textDecoration:"none"}}>
            <Text
            className={classes.helloBtn}
              px={"xl"}
              py="sm"
              fz="lg"
              fw={700}
              sx={(theme) => ({
                backgroundColor: theme.colors.dark[9],
                borderRadius: theme.radius.xl,
                color: theme.colors.gray[0],
              })}
            >
              Say Hello
            </Text>
          </Link>
          <Flex gap={"lg"}>
            {socialLinksData.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                target="_blank"
                className={classes.socialIcon}
              >
                <Image src={item.logo.src} alt={item.name} height={40} />
              </Link>
            ))}
          </Flex>
          <Link
            href="/Ashutosh_Dash_Frontend_Dev.pdf"
            style={{ textDecoration: "none" }}
          >
            <Text fw={700} fz="xl" color="dark.6" className={classes.resumeLink}>
              Hire Me?
            </Text>
          </Link>
        </Flex>
      </Container>
    </>
  );
};
export default Contact;

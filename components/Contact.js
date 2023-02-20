import { Container, createStyles, Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import GitHubLogo from "public/socialicons/github.svg";
import GMailLogo from "public/socialicons/gmail.svg";
import LinkedinLogo from "public/socialicons/linkedin.svg";
import TwitterLogo from "public/socialicons/twitter.svg";

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
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      opacity: "100%",
      transform: "translateY(-5px)",
    },
  },
  socialIconImg:{
    objectFit:"contain",
    transition: "all 0.5s ease-in-out",
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
  const largeScreen = useMediaQuery('(min-width: 550px)');

  return (
    <>
      <Container
        size="xl"
        my="xl"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[1],
          padding: theme.spacing.xl,
          borderRadius: theme.radius.lg,
        })}
      >
        <Flex justify={"space-between"} gap="lg" align="center" direction={largeScreen?"row":"column"}>
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
          <Flex gap={"lg"} direction={largeScreen?"row":"column"}>
            {socialLinksData.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                target="_blank"
                className={classes.socialIcon}
              >
                <Image className={classes.socialIconImg} src={item.logo.src} alt={item.name} height={40} width={40} blurDataURL={item.logo.blurDataURL} />
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

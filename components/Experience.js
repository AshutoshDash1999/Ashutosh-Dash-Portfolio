import { Box, Container, Flex, Image, Text, Title } from "@mantine/core";
import Link from "next/link";
import BookingjiniLogo from "public/brandslogo/bookingjini.webp";
import VichayanLogo from "public/brandslogo/vichayan.webp";
import YMLabsLogo from "public/brandslogo/ymlabs.webp";

const experienceData = [
  {
    companyName: "bookingjini",
    logo: BookingjiniLogo,
    companySite: "http://bookingjini.com/",
    role: "Frontend Developer",
    period: "01 February 2022 - Present",
  },
  {
    companyName: "vichayan",
    logo: VichayanLogo,
    companySite: "http://vichayan.com/",
    role: "Frontend Developer",
    period: "01 September 2022 - 31 October 2022",
  },
  {
    companyName: "ymlabs",
    logo: YMLabsLogo,
    companySite: "https://yellmonlabs.com/",
    role: "UI Developer",
    period: "05 May 2022 - 31 July 2022",
  },
];

const Experience = () => {
  return (
    <Container size="xl" py={"lg"}>
      <Title order={2} size="h1">
        <Text span color="gray.6">
          I have worked as a
        </Text>{" "}
        <Text span>Frontend Developer</Text>
        <Text span color="gray.6">
          {" "}
          for:
        </Text>
      </Title>

      <Flex my="xl" align={"center"} justify={"center"} gap="xl" wrap={"wrap"}>
        {experienceData.map((item) => (
          <Box
            key={item.companyName}
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[1],
              padding: theme.spacing.xl,
              borderRadius: theme.radius.md,
              cursor: "pointer",
            })}
          >
            <Image alt={item.companyName} fit="contain" height={100} src={item.logo.src}/>
            <Link target="_blank" style={{ textDecoration: "none", color:"black" }} href={item.companySite}>{item.companySite}</Link>
            <Text fz="xl" fw={800}>{item.role}</Text>
            <Text>{item.period}</Text>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};
export default Experience;

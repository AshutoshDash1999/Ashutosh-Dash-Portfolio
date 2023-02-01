import { Box, Container, Flex, Image, Text, Title } from "@mantine/core";
import YMLabsLogo from "public/brandslogo/ymlabs.png";
import VichayanLogo from "public/brandslogo/vichayan.png";
import Link from "next/link";

const experienceData = [
  {
    companyName: "ymlabs",
    logo: YMLabsLogo,
    companySite: "https://yellmonlabs.com/",
    role: "UI Developer",
    period: "05 May 2022 - 31 July 2022",
  },
  {
    companyName: "vichayan",
    logo: VichayanLogo,
    companySite: "http://vichayan.com/",
    role: "Frontend Developer",
    period: "01 September 2022 - 31 October 2022",
  },
];

const Experience = () => {
  return (
    <Container size="xl" py={"lg"}>
      <Title order={1}>
        <Text span color="gray.6">
          I have worked as a
        </Text>{" "}
        <Text span>Frontend Developer</Text>
        <Text span color="gray.6">
          {" "}
          and{" "}
        </Text>
        <Text span>UI Developer</Text>
        <Text span color="gray.6">
          {" "}
          for:
        </Text>
      </Title>

      <Flex align={"center"} justify={"center"} gap="lg" wrap={"wrap"}>
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
            <Link style={{ textDecoration: "none", color:"black" }} href={item.companySite}>{item.companySite}</Link>
            <Text fz="xl" fw={800}>{item.role}</Text>
            <Text>{item.period}</Text>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};
export default Experience;

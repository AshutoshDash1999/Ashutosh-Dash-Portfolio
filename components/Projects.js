import {
  Box,
  Container,
  createStyles,
  Grid,
  Image,
  Stack,
  Text,
  Title
} from "@mantine/core";
import AuctionPic from "public/projectBanner/auction.jpg";
import FindContestPic from "public/projectBanner/find-contest.jpg";
import GTAPic from "public/projectBanner/get-that-api.webp";
import ICCCTPic from "public/projectBanner/iccct.jpg";
import IsroInfoPic from "public/projectBanner/isroinfo.jpg";
import IsteOdishaPic from "public/projectBanner/isteodisha.jpg";
import PlacementNoticeGenerator from "public/projectBanner/placementnoticegenerator.jpg";
import ZigbeePic from "public/projectBanner/zigbee.jpg";
import ProjectCard from "./ProjectCard";
const projectData1 = [
  {
    projectPic: AuctionPic,
    projectName: "Live Bidding System",
    projectDescription: "A portal to bid and sell different items.",
    liveLink: "http://live-bidding-system.vercel.app/",
    githubLink: "https://github.com/AshutoshDash1999/live-bidding-system",
    techUsed: ["React", "Typescript", "ChakraUI", "Firebase", "Vercel"],
  },
  {
    projectPic: ICCCTPic,
    projectName: "ICCCT",
    projectDescription:
      "Official site for International Conference on Communication and Computational Techniques 2023",
    liveLink: "https://csoutr.in/",
    githubLink: "https://github.com/AshutoshDash1999/iccct-2023",
    techUsed: ["React", "Typescript", "NextJS", "ChakraUI", "Netlify"],
  },
  {
    projectPic: GTAPic,
    projectName: "Get That API",
    projectDescription:
      "A free API testing browser extension to test your API with GET, POST, PUT, PATCH, DELETE methods.",
    liveLink: "https://chrome.google.com/webstore/detail/get-that-api/dogjkacjoihbjjhmdnpoidblknfaocao",
    githubLink:
      "https://github.com/AshutoshDash1999/get-that-api-browser-extension",
    techUsed: ["HTML", "CSS", "JavaScript", "React", "Axios"],
  },
];

const projectData2 = [
  {
    projectPic: IsteOdishaPic,
    projectName: "ISTE Odisha",
    projectDescription: "A website of official ISTE Odisha.",
    liveLink: "https://isteodisha.vercel.app/",
    githubLink: "",
    techUsed: ["React", "NextJS", "DaisyUI", "TailwindCSS", "Vercel"],
  },
  {
    projectPic: IsroInfoPic,
    projectName: "ISRO Information",
    projectDescription:
      "A website for showing all the ISRO's spacecrafts, lanchers, satellites and centers.",
    liveLink: "https://isro-work-info.netlify.app/",
    githubLink: "https://github.com/AshutoshDash1999/ISRO-info",
    techUsed: ["React", "TailwindCSS", "Netlify"],
  },
  {
    projectPic: FindContestPic,
    projectName: "Find Contest",
    projectDescription:
      "Show upcoming and active competitive programming competitions.",
    liveLink: "https://find-contest.vercel.app/",
    githubLink: "https://github.com/AshutoshDash1999/find-contest",
    techUsed: ["NextJS", "Mantine", "Vercel"],
  },
];
const projectData3 = [
  {
    projectPic: ZigbeePic,
    projectName: "Zigbee",
    projectDescription: "Offical website for Zigbee Student Developers' Club.",
    liveLink: "https://zigbeeoutr.in/",
    githubLink: "https://github.com/Zigbee-Student-Developers-Club/zigbee-2",
    techUsed: ["React", "Typescript", "NextJS", "ChakraUI", "Netlify"],
  },
  {
    projectPic: PlacementNoticeGenerator,
    projectName: "Placement Notice Generator",
    projectDescription:
      "Web tool to generate placement drive notice in WhatsApp/Telegram format.",
    liveLink: "https://placement-notice-generator.vercel.app/",
    githubLink:
      "https://github.com/AshutoshDash1999/placement-notice-generator",
    techUsed: ["React", "Typescript", "MantineUI", "Vercel"],
  }
];

const useStyles = createStyles((theme) => ({
  blankBox1: {
    transition: "all 0.5s",
    backgroundColor: "white",
    padding: "4rem",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: "none",
    },
  },
  blankBox2: {
    transition: "all 0.5s",
    backgroundColor: "white",
    padding: theme.spacing.md,
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      display: "none",
    },
  },
}));

const Projects = () => {
  const { classes } = useStyles();

  return (
    <Container size="xl" py={"lg"}>
      <Title order={2} size="h1">
        <Text span color="gray.6">
          My
        </Text>{" "}
        <Text span>`Proof of Work`:</Text>
      </Title>
      <Grid gutter="xl" my="xl">
        <Grid.Col sm={6} lg={4}>
          <Stack spacing="xl">
            <Box className={classes.blankBox1}></Box>
            {projectData1.map((projectItem) => (
              <ProjectCard key={projectItem.githubLink} {...projectItem} />
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col sm={6} lg={4}>
          <Stack spacing="xl">
            {projectData2.map((projectItem) => (
              <ProjectCard key={projectItem.githubLink} {...projectItem} />
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col sm={6} lg={4}>
          <Stack spacing="xl">
            <Box className={classes.blankBox2}></Box>
            {projectData3.map((projectItem) => (
              <ProjectCard key={projectItem.githubLink} {...projectItem} />
            ))}
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
export default Projects;

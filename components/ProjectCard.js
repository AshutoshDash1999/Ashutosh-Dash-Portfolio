import {
  Badge,
  Box,
  Button,
  createStyles,
  Flex,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  cardButtn: {
    width: "10rem",
    transition: "all 0.5s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow:
        "0px 8px 15px 0 10px 15px -3px rgba(59,130,246,.5),0 4px 6px -4px rgba(59,130,246,.5);",
    },
  },
}));

const ProjectCard = ({
  projectPic,
  projectName,
  projectDescription,
  liveLink,
  githubLink,
  techUsed,
}) => {
  const { classes } = useStyles();
  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[1],
        padding: theme.spacing.xl,
        borderRadius: theme.radius.lg,
      })}
    >
      <Image
        style={{
          objectFit: "cover",
          width: "100%",
          marginBottom: "10px",
          borderRadius: "20px",
          height: "auto",
        }}
        height={220}
        width={300}
        src={projectPic?.src}
        alt="With default placeholder"
        blurDataURL={projectPic?.blurDataURL}
      />
      <Title order={3}>{projectName}</Title>
      <Text fw={600} fz="xl" c="dimmed">
        {projectDescription}
      </Text>
      <Flex wrap={"wrap"} gap="sm" my="md">
        {techUsed.map((tools) => (
          <Badge key={tools} radius="sm" variant="filled">
            {tools}
          </Badge>
        ))}
      </Flex>
      <Flex
        align={"center"}
        justify="space-evenly"
        wrap="wrap"
        gap={"lg"}
        mt="md"
      >
        {githubLink ? (
          <Link target="_blank" href={`${githubLink}`}>
            <Button radius="xl" className={classes.cardButtn} variant="subtle">
              Code
            </Button>
          </Link>
        ) : (
          ""
        )}
        <Link target="_blank" href={`${liveLink}`}>
          <Button radius="xl" className={classes.cardButtn}>
            <Flex  gap={"xs"} align="center">
              <Text span>Live</Text>
              <Image
                style={{ color: "#ffffff" }}
                src="./external-link.svg"
                alt={`${projectName}'s Live Demo`}
                width={20}
                height={20}
              />
            </Flex>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};
export default ProjectCard;

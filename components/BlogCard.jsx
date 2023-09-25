import { Card, createStyles, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  blogCard: {
    transition: "all 0.5s",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
}));

const BlogCard = ({
  blogUrl,
  coverImage,
  title,
  description,
  readable_publish_date,
}) => {
  const { classes } = useStyles();
  // console.log(coverImage);
  return (
    <Link href={`${blogUrl}`} target="_blank">
      <Card p="lg" radius="lg" className={classes.blogCard}>
        <Card.Section>
          <Image
            style={{
              width: "100%",
              borderRadius: "20px",
              objectFit: "cover",
            }}
            src={coverImage}
            height={160}
            width={200}
            alt={title}
          />
        </Card.Section>

        <Text weight={600} pt={"md"}>{title}</Text>
        <Text size="sm" color="dimmed">
          {description}
        </Text>
        <Text size="sm">{readable_publish_date}</Text>
      </Card>
    </Link>
  );
};
export default BlogCard;

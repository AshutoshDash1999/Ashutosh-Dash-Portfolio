import { Container, Grid, Text, Title } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const blogData = [
  {
    blogUrl:
      "https://dev.to/ashutoshdash/social-login-oauth-with-linkedin-5cg9",
    coverImage:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--CZ8rhpQR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ljtt2dfbbev4cr0r7r4p.png",
    title: "Social login OAuth with LinkedIn",
    readable_publish_date: "Jul 24 '22",
    description:
      "With LinkedIn's user base expanding, an increasing number of software-based businesses will seek to...",
  },
  {
    blogUrl:
      "https://dev.to/ashutoshdash/what-is-context-api-in-react-and-how-to-use-it-56mp",
    coverImage:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--c4FW_fsN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7kr59tusu0lw21izw334.png",
    title: "What is Context API in React and how to use it?",
    readable_publish_date: "Apr 29 '22",
    description:
      "Learn to use Context API and how will it be helpful to you in your projects...",
  },
  {
    blogUrl:
      "https://dev.to/ashutoshdash/frontend-internship-interview-experience-3a7i",
    coverImage:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--P7syTZ19--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cjh5ue33n71ym6vc7niz.png",
    title: "Frontend Internship Interview Experience",
    readable_publish_date: "Mar 27 '22",
    description:
      "Long story short, I applied to XYZ company through Internshala for a frontend developer position....",
  },
];

const Blogs = () => {

  return (
    <div>
      <Container size="xl" py={"lg"}>
        <Title order={2} size="h1">
          <Text span color="gray.6">
            I have written some
          </Text>{" "}
          <Text span>blogs</Text>
          <Text span color="gray.6">
            {" "}
            on{" "}
          </Text>
          <Text span>Frontend Development</Text>
        </Title>

        <Grid gutter="xl" my="xl">
          {blogData.map((blogItem) => (
            <Grid.Col key={blogItem.blogUrl} sm={6} lg={4}>
              <BlogCard {...blogItem} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default Blogs;

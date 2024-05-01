import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Typography, Grid, Card, CardContent, CardMedia, Avatar, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Video5 from "./Video5";
import News from "./News";
export default function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const posts = [
    {
      _id: 1,
      title: 'No Film School ',
      content: 'This website offers a plethora of articles, tutorials, and resources covering various aspects of filmmaking, from scriptwriting to post-production techniques.',
      image: 'https://picsum.photos/id/3/5000/3333',
      link: 'https://nofilmschool.com/',
      author: {
        name: 'John Doe',
        picture: 'https://picsum.photos/200/300',
      },
      date: 'March 18, 2024'
    },
    {
      _id: 2,
      title: 'Film Riot ',
      content: 'Film Riot provides in-depth tutorials, DIY filmmaking techniques, and industry insights through their blog and YouTube channel, making it a valuable resource for filmmakers of all levels.',
      image: 'https://picsum.photos/id/29/4000/2670',
      link: 'https://www.youtube.com/user/filmriot',
      author: {
        name: 'Jane Smith',
        picture: 'https://picsum.photos/200/300',
      },
      date: 'March 19, 2024'
    },
    {
      _id: 3,
      title: 'PremiumBeat Blog',
      content: 'PremiumBeats blog features articles on filmmaking techniques, gear reviews, and industry trends, catering to filmmakers, videographers, and content creators',
      image: 'https://picsum.photos/id/9/5000/3269',
      link: 'https://www.premiumbeat.com/blog/',
      author: {
        name: 'Alex Johnson',
        picture: 'https://picsum.photos/200/300',
      },
      date: 'March 20, 2024'
    },

  ];

  const loadMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 3);
  };

  useEffect(() => {
    const fetchBlogs = () => {
      setLoading(true);
      axios
        .get(`https://app.myreeldream.ai/api/v1/blog/`)
        .then((res) => {
          setBlogData(res.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <h2 style={{ color: 'white', marginLeft: '3.5vw', display: "flex", justifyContent: "center", }}>Blogs</h2>
      <Container maxWidth="lg" >
        <Grid container spacing={3}>
          {posts.slice(0, visiblePosts).map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post._id}>
              <Box
                style={{ textDecoration: "none" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card style={{
                    marginBottom: '2rem', color: 'white', background: "rgba(0, 0, 0, 0.418)",
                    "&:hover": {
                      boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.5)",
                    },
                  }}>
                    <CardMedia
                      style={{ color: 'white', }}
                      component="img"
                      height="200"
                      image={post.image}
                      alt={post.title}
                    />
                    <CardContent style={{ color: 'white', }}>
                      <Typography variant="h6" component="h2">
                        {post.title}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {post.content}<a style={{ color: 'white', padding: '5px', }} href={post.link} >seeMore</a>
                      </Typography>
                      <div style={{ display: 'flex', color: 'white', alignItems: 'center', justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                          <Avatar src={post.author.picture} alt={post.author.name} style={{ marginRight: '0.5rem' }} />
                          <Typography style={{ color: 'white', }} variant="body2" color="textSecondary">
                            {post.author.name}
                          </Typography>
                        </div>
                        <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: '1rem', color: 'white', }}>
                          {post.date}
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid style={{ display: "flex", justifyContent: "center", marginBottom: '10px', }}>
          {visiblePosts < posts.length && (
            <Button sx={{ color: 'white', border: '2px solid #3770FF', borderRadius: '20px', '&:hover': { color: '#3770FF', border: '2px solid #3770FF' }, }} color="primary" onClick={loadMorePosts}>
              Load More
            </Button>
          )}
        </Grid>
        <Video5 />
        <News />
      </Container>


    </>
  );
}


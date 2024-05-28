import React from 'react';
import { CardMedia, CardContent, Typography, Grid, Button, Box } from '@mui/material';
import MainCard from 'components/MainCard';

// Individual Blog Post Component
const BlogPost = ({ title, summary, imageUrl, sourceUrl }) => (
  <Grid item xs={12} sm={6} md={4}>
    <MainCard
      sx={{
        maxWidth: 350,
        height: 420, // Fixed height for consistency
        mb: 4,
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          boxShadow: 3
        }
      }}
    >
      <CardMedia
        component="img"
        height="140" // Fixed height for the image
        image={imageUrl}
        alt="Blog post image"
      />
      <CardContent
        sx={{
          flexGrow: 1,
          overflow: 'auto' // Allow scrolling within the card if content is too long
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      {/* <CardActions> */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button size="small" color="primary" href={sourceUrl}>
          Read More
        </Button>
      </Box>
      {/* </CardActions> */}
    </MainCard>
  </Grid>
);

// Blog Posts List Component
const BlogPostsList = () => {
  const posts = [
    {
      title: 'Understanding Diabetes: Types and Treatments',
      summary:
        'Explore the different types of diabetes and the latest treatment options available for managing this chronic condition effectively.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      sourceUrl: 'https://www.diabetes.org/diabetes'
    },
    {
      title: 'Nutritional Strategies for Managing Diabetes',
      summary:
        'Learn how diet plays a crucial role in controlling blood sugar levels and what foods to include in a diabetic-friendly diet.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      sourceUrl: 'https://www.diabetes.org/nutrition'
    },
    {
      title: 'The Impact of Exercise on Diabetes',
      summary: 'Discover how regular physical activity can help improve insulin sensitivity and reduce the risk of diabetes complications.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      sourceUrl: 'https://www.diabetes.org/exercise'
    },
    {
      title: 'Diabetes and Mental Health',
      summary: 'Addressing the psychological aspects of living with diabetes and strategies for maintaining mental well-being.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      sourceUrl: 'https://www.diabetes.org/mental-health'
    },
    {
      title: 'Advancements in Diabetes Monitoring Technologies',
      summary:
        'A look at the latest technological innovations that are transforming how people with diabetes monitor and manage their condition.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      sourceUrl: 'https://www.diabetes.org/tech'
    }
  ];

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {posts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </Grid>
  );
};

export default BlogPostsList;

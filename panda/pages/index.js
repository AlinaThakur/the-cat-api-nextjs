// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, CircularProgress } from '@material-ui/core';
import axios from 'axios';
export default function Home() {
  const [catData, setCatData] = useState(null);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1');
        const randomCat = response.data[0];
        const fullCatDetailsResponse = await axios.get(`https://api.thecatapi.com/v1/images/${randomCat.id}`);
        const fullCatDetails = fullCatDetailsResponse.data;

        setCatData(fullCatDetails);
      } catch (error) {
        console.error('Error fetching cat data:', error);
      }
    };

    fetchCatData();
  }, []);


  return (
    <div className={styles.container}>
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Random Cat
      </Typography>
      {catData ? (
        <Card>
          <CardMedia
            component="img"
            alt="Random Cat"
            height="300"
            image={catData.url}
            title="Random Cat"
          />
          <CardContent>
            <Typography variant="h6">{catData.breeds[0].name}</Typography>
            <Typography>{catData.breeds[0].description}</Typography>
          </CardContent>
        </Card>
      ) : (
        <CircularProgress style={{ marginTop: '2rem' }} />
      )}
    </Container>

    </div>
  )
}

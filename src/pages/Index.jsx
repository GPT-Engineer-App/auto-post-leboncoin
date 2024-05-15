import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Image, Textarea, IconButton, useToast } from "@chakra-ui/react";
import { FaUpload, FaEdit, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [photos, setPhotos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const toast = useToast();

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files).slice(0, 3);
    setPhotos(files.map((file) => URL.createObjectURL(file)));
    // Here you would add the logic to generate title, description, and price based on the photos
    setTitle("Generated Title");
    setDescription("Generated Description");
    setPrice("Generated Price");
  };

  const handlePublish = () => {
    // Here you would add the logic to publish the ad on leboncoin.fr
    toast({
      title: "Annonce publiée.",
      description: "Votre annonce a été publiée avec succès sur leboncoin.fr.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Publier une annonce sur leboncoin.fr</Text>
        <Input type="file" accept="image/*" multiple onChange={handlePhotoUpload} />
        <VStack spacing={2} width="100%">
          {photos.map((photo, index) => (
            <Image key={index} src={photo} alt={`Photo ${index + 1}`} boxSize="150px" objectFit="cover" />
          ))}
        </VStack>
        <Input placeholder="Titre de l'annonce" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea placeholder="Description de l'annonce" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Input placeholder="Prix de l'annonce" value={price} onChange={(e) => setPrice(e.target.value)} />
        <Button leftIcon={<FaPaperPlane />} colorScheme="teal" onClick={handlePublish}>
          Publier
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;

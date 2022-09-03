import { Box, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Character } from "../model/rick-and-morty";

function CharacterDetail() {
  const [member, setMember] = React.useState<Character>();
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  return (
    <>
      <h2>Rick and Morty Detail Page</h2>
      {member ? (
        <Card variant="outlined" sx={{ minWidth: 275, mb: 2 }}>
          <CardMedia
            component="img"
            image={member.image}
            alt="rick-and-morty-img"
            sx={{ width: 300, height: 300 }}
          />
          <CardContent>
            <p> id: {member.id}</p>
            <p> name: {member.name}</p>
            <p> status: {member.status}</p>
            <p> species: {member.species}</p>
            <p> gender: {member.gender}</p>
          </CardContent>
        </Card>
      ) : (
        <>Loading...</>
      )}
      <Link to="/rick-and-morty-list">Back to list page</Link>
    </>
  );
}

export default CharacterDetail;

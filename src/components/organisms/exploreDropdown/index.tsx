import { Box, Container, Grid } from "@mui/material";
import React from "react";

const ExploreDropDown = () => {
  return (
    <div>
      <Container>
        <Grid>
          <Grid item>
            <Box>Explore by category</Box>
          </Grid>
          <Grid item>
            <Box>See recently added titles</Box>
          </Grid>
          <Grid item>
            <Box>See popular titles</Box>
          </Grid>
        </Grid>
        <hr />
      </Container>
      <Container>
        <Grid container>
          <Grid item>
            <Box>{/* label icon */}</Box>
            <Box>{/* label icon */}</Box>
            <Box>{/* label icon */}</Box>
          </Grid>
          <Grid item>
            <Box>{/* label icon */}</Box>
            <Box>{/* label icon */}</Box>
            <Box>{/* label icon */}</Box>
          </Grid>
          <Grid item>
            <Box>{/* label icon */}</Box>
            <Box>{/* label icon */}</Box>
            <Box>{/* label icon */}</Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ExploreDropDown;

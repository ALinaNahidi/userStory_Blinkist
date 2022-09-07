import { Grid } from "@mui/material";
import React, { useState } from "react";
import BookThumbnail from "../../atoms/bookThumbnail";
import TypographyComponent from "../../atoms/typography";
import SecondaryTabs from "../../molecules/secondaryTabs";

const BookDetail = () => {
  const { data } = useQuery(BOOK_DETAILS);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleAddToLibrary = () => {};

  const handleBuy = () => {};

  const handleAddToKindle = () => {};

  return (
    <div>
      <Grid>
        <Grid item>
          <TypographyComponent text={"book name"} />
          <TypographyComponent text={"book tagline"} />
          <TypographyComponent text={"Authors"} />
          {/* icon labels */}
          {/* buttons in a grid */}
          <SecondaryTabs data={data} />
        </Grid>
        <Grid item>
          <BookThumbnail imgSrc={""} />
        </Grid>
      </Grid>
    </div>
  );
};

export default BookDetail;

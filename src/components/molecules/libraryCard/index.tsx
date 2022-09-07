import { Card } from "@mui/material";
import React from "react";
import BookThumbnail from "../../atoms/bookThumbnail";
import TypographyComponent from "../../atoms/typography";

const LibraryCard = ({ data }) => {
  return (
    <div>
      <Card>
        <BookThumbnail imgSrc={""} />
        <TypographyComponent text={data.name} />
        <TypographyComponent text={data.author} />
        {/* icon labels */}
        {/* progressbar */}
      </Card>
    </div>
  );
};

export default LibraryCard;

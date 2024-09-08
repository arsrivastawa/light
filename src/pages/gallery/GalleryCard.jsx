import React from "react";

function GalleryCard({ ImgUrl, alt }) {
  return (
    <div class="md:p-2 p-1 w-full">
      <img
        alt={alt}
        className="w-full rounded-md cursor-pointer hover:scale-[1.025] aspect-[1.5] duration-150 object-cover object-top block"
        src={`/assets/Gallery/${ImgUrl}.jpg`}
      />
    </div>
  );
}

export default GalleryCard;

import React from "react";

import ImageGallery from "react-image-gallery";

import { images} from "../data/slideShow"

function GalleryPage() {
  return (
    <>
      <h2>Chau's Gallery of Photography</h2>
      <p>Images of important places in two countries: Vietnam and India.</p>

      <article class="gallery">
        <ImageGallery items={images} />
      </article>
    </>
  );
}

export default GalleryPage;

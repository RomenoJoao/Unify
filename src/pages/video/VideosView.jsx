import React from "react";
import { Link } from "react-router-dom";
import "./vidv.css";
import SearchBar from "../../components/SearchBar";
import { useQuery, useQueryClient, useMutation } from "react-query";
import endpoints from "../../api/endpoints";




function VideoItem({ imageUrl, heading, perfilI }) {

  const queryClient = useQueryClient()
  const {data, datisLoading} = useQuery("getAllContent", endpoints.getAllContent) 

  return (
    <div className="video_items">
      <a href="single-page.html">
        <img src={imageUrl} alt="" />
      </a>
      <div className="details flex">
        <div className="img">
          <img   src={perfilI} alt="" />
        </div>
        <div className="heading">
          <p>{heading}</p>
          <span>
            GorkCoder <i className="fa fa-circle-check"></i>
          </span>
          <span>56.7M .1 Week ago</span>
        </div>
      </div>
    </div>
  );
}
//
const images = [
  "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  "https://images.unsplash.com/photo-1542396601-dca920ea2807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3302&q=80",
  "https://images.unsplash.com/photo-1519114056088-b877fe073a5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2666&q=80",
  "https://images.unsplash.com/photo-1542451542907-6cf80ff362d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2421&q=80",
  "https://imgv3.fotor.com/images/videoImage/create-various-bridal-shower-invitation-with-fotor-copy.jpg",
  "https://i.ytimg.com/vi/r_2tsLb__-E/maxresdefault.jpg",
  "https://hotpot.ai/designs/thumbnails/youtube-thumbnail/2.jpg",
  "https://static-cse.canva.com/blob/1068022/1600w-wK95f3XNRaM.jpg",
  "https://marketplace.canva.com/EAFGehJ4TNI/1/0/1600w/canva-yellow-bright-business-idea-tutorial-youtube-thumbnail-PAg4rCuDqkE.jpg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/improve-your-business-youtube-thumbnail-design-template-048f462e9ef3f356a9a1992d4e8cd5aa_screen.jpg?ts=1598387935",
  "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/268438562/original/333fafff21630655c243cfeb8a6a2a6684e4a4d7/design-amazing-youtube-thumbnail-in-3-hours.png",
  "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/269297133/original/eeef1282eb2a9bfdc70c7982330914970c5b82b1/amazing-design-3-youtube-thumbnail-in-1-hours.png",
];

function VideosView() {
  return (
    <main className="geralvd">
      <div className="searchPv">
        <SearchBar></SearchBar>
      </div>

      <section className="video_content grid">
        {images.map((videoThumbnail) => (
          <Link to={"/VidTitle"}>
            <VideoItem
              imageUrl={videoThumbnail}
              perfilI="https://static.rfstat.com/renderforest/images/v2/landing-pics/youtube-logo/3818.jpg"
              heading="How to make Hotel Booking Website With HTML CSS ......"
            />
          </Link>
        ))}
      </section>
    </main>
  );
}

export default VideosView;

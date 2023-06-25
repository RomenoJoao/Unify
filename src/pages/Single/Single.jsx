import "video-react/dist/video-react.css"; // import css
import React from "react";
import "./Single.css";
import SearchBar from "../../components/SearchBar";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import endpoints from "../../api/endpoints";
import { Player, ControlBar, ReplayControl, ForwardControl } from "video-react";

import { useState, useEffect } from "react";

function SinglePage() {
  const { VidTitle } = useParams();
  const [videof, setVideof] = useState();
  const [video, setVideo] = useState({});

  const url = "http://localhost:3443/api/";

  const { data, isLoading, isError, error } = useQuery(["getContent"], () =>
    endpoints.getContent(VidTitle)
  );

  if (isLoading) return <span>Carregando...</span>;
  if (isError) return <span>Erro: {error.message}</span>;
  if (!data) {
    return <span>Não existe Items dessa categoria</span>;
  }

  // useEffect(() => {
  //   endpoints
  //     .getContent(VidTitle)
  //     .then(Response.data)
  //     .then((data) => {
  //       setVideo(data);

  //       endpoints
  //         .getFile(data.path)
  //         .then(Response.data)
  //         .then((data2) => {
  //           setVideof(data2);
  //         });
  //     });
  // }, []);

  return (
    <main className="single_pages">
      <div className="searchS">
        <SearchBar />
      </div>
      <section className="video_items flex">
        <div className="left1">
          <div className="left_content">
            <Player>
              <source
                src={url + "file/" + data.path}
                type="video/mp4"
                poster={url + "file/" + data.coverpath}
              />
              <ControlBar>
                <ReplayControl seconds={10} order={1.1} />
                <ForwardControl seconds={30} order={1.2} />
              </ControlBar>
            </Player>

            {/* video tags */}
            <div className="tag">
              <label className="tags">#web #webdesign #Frontend</label>
              <p>{data.titulo}</p>
            </div>
            {/* video tags */}

            {/* total viewer */}
            <div className="view flex2 border_bottom">
              <div className="view-text">
                <span>693,348 view Premiered 53 minutes ago</span>
              </div>

              <div className="flex1">
                <div className="icon">
                  <i className="fa fa-thumbs-up"></i>
                  <label>225k</label>
                </div>
                <div className="icon">
                  <i className="fa fa-thumbs-down"></i>
                  <label>DISLIKE</label>
                </div>
                <div className="icon">
                  <i className="fa fa-share"></i>
                  <label>SHARE</label>
                </div>
                <div className="icon">
                  <i className="fa fa-scissors"></i>
                  <label>CLIP</label>
                </div>
                <div className="icon">
                  <i className="fa fa-bookmark"></i>
                  <label>SAVE</label>
                </div>
                <div className="icon">
                  <i className="fa fa-ellipsis"></i>
                </div>
              </div>
            </div>
            {/* total viewer */}

            {/* video details */}
            <div className="details flex1 border_bottom">
              <Link to="/Criador">
                <div className="img">
                  <img src="images/logo.png" alt="" />
                </div>
              </Link>
              <div className="heading">
                <h4>
                  GorkCoder <i className="fa fa-circle-check"></i>
                </h4>
                <span>15M Subscribers</span>
                <h5>
                  Responsive Youtube Clone in HTML CSS and Javascript |
                  Dark/Light Mode | GorkCoder
                </h5>
                <h5>
                  In this video tutorial, I have shown how to create a
                  responsive youtube clone using HTML and CSS only
                </h5>
                <span>Show More</span>
              </div>
            </div>
            {/* video details */}

            {/* video comment */}
            <div className="comment">
              <div className="comment-heading flex1">
                <h4>120 Comments</h4>
                <h4>
                  <i className="fa fa-list-ul"></i> <label>SORT BY</label>
                </h4>
              </div>
            </div>

            {/* video comment by self */}
            <div className="details comment_self flex1">
              <div className="img">
                <img src="images/logo.png" alt="" />
              </div>
              <div className="heading">
                <input type="text" placeholder="Add a comment...." />
              </div>
            </div>
            {/* video comment by self */}

            {/* video comment by other */}
            <div className="details_Comment">
              <div className="details flex1">
                <div className="img">
                  <img src=" " alt="" />
                </div>
                <div className="heading">
                  <h4>
                    RandomGuy&nbsp;&nbsp;
                    <i className="fa fa-circle-check"></i>
                  </h4>
                  <span>2 years ago</span>
                  <h5>This is an amazing tutorial. Thanks for sharing!</h5>
                  <span>Show More</span>
                </div>
              </div>
            </div>
            {/* video comment by other */}
          </div>
        </div>

        <div className="right1">
          <div className="right_content">
            <div className="related">
              <h4>Related Videos</h4>
              {/* related video */}
              <div className="related_video">
                <div className="related_video_image">
                  <img src="images/video_images/back1.jpg" alt="" />
                  <span>7:34</span>
                </div>
                <div className="related_video_content">
                  <h4>
                    How to make Hotel Booking Website With HTML CSS ......
                  </h4>
                  <p>GorkCoder</p>
                  <span>
                    693,348 views &nbsp;&nbsp;&nbsp; Premiered 53 minutes ago
                  </span>
                </div>
              </div>
              {/* related video */}

              {/* related video */}
              <div className="related_video">
                <div className="related_video_image">
                  <img src="images/video_images/back2.jpg" alt="" />
                  <span>11:20</span>
                </div>
                <div className="related_video_content">
                  <h4>
                    How to create a Responsive YouTube Clone using HTML and CSS
                  </h4>
                  <p>Dev Ed</p>
                  <span>
                    1,234,567 views &nbsp;&nbsp;&nbsp; Premiered 1 day ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SinglePage;

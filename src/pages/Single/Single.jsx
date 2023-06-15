import React from "react";
import "./Single.css";
import SearchBar from "../../components/SearchBar";

function SinglePage() {
  return (
    <main className="single_pages">
      <div className="searchS">
        <SearchBar></SearchBar>
      </div>
      <section className="video_items flex">
        <div className="left1">
          <div className="left_content">
            <video controls>
              <source
                src="./video/video1.mp4"
                type="video/mp4"
                poster="images/video_images/back1.jpg"
              />
            </video>

            {/* video tags */}
            <div className="tag">
              <label className="tags">#web #webdesign #Frontend</label>
              <p>How to make Hotel Booking Website With HTML CSS ......</p>
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
              <div className="img">
                <img src="images/logo.png" alt="" />
              </div>
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
                  <img
                    src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-user-interface-victoruler-flat-victoruler.png"
                    alt=""
                  />
                </div>
                <div className="heading">
                  <h4>
                    RandomGuy&nbsp;&nbsp;<i className="fa fa-circle-check"></i>
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

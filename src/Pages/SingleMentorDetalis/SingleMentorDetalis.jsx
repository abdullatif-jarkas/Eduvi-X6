import { useState } from "react";
import "./SingleMentorDetalis.css";
export default function SingleMentorDetalis() {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <>
            <h2 className="SD-About">About Kritsin</h2>
            <p className="SD-lorem">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus quod sint dolores non maiores sed veritatis accusantium,
              exercitationem voluptatum in velit hic. Fuga praesentium
              consectetur repellat unde iure itaque labore.
            </p>
            <p className="SD-lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, alias voluptatibus. Nesciunt eaque fuga perspiciatis
              incidunt. Quidem pariatur autem dolorem consequuntur quibusdam
              incidunt architecto cupiditate explicabo? Eos sed autem iure earum
              fugit corrupti labore, error dolore laborum. Nihil harum excepturi
              asperiores iusto voluptate culpa, repudiandae, veniam, eum
              voluptatem repellendus dolorem.
            </p>
            <h2 className="SD-About">Certification</h2>
            <p className="SD-lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              molestias repellat hic ut impedit? Velit cupiditate id veritatis
              sapiente, consequatur porro eius non omnis? Cum blanditiis modi
              provident ex expedita doloribus nesciunt beatae nam rerum aliquam,
              quasi voluptatem, inventore similique velit perspiciatis! Error
              commodi at aut nesciunt officiis veritatis laboriosam. Nam maxime
              numquam neque eligendi, veritatis omnis necessitatibus optio
              laborum nesciunt amet voluptatum quaerat dignissimos architecto
              modi voluptas obcaecati culpa, sint eveniet vitae? Dicta
              consectetur quae beatae tempore accusamus neque! Earum id error ex
              eius sed nulla debitis illo rerum. Eos facere vitae pariatur unde
              maxime aliquid autem quos ex!
            </p>
          </>
        );
      case "courses":
        return (
          <>
            <h2 className="SD-About">Courses</h2>
            <p className="SD-lorem">
            <ul>
              <li><strong>Lorem ipsum dolor:</strong> sit  amet consectetur adipisicing elit. Dolore, exercitationem saepe! Similique asperiores, ex eligendi non, tempora sequi laboriosam sit corrupti quae dolore saepe, adipisci ab recusandae optio. Iure aperiam impedit iste accusantium est, nobis fuga doloribus ea, corrupti suscipit nam illo pariatur ut, eaque repellat. Ea atque ut voluptas?</li>
              <li> <strong>Mollitia quidem explicabo</strong> iusto ipsam similique illum atque, ratione itaque ex magnam quam adipisci facilis. Provident nesciunt doloremque neque facilis, debitis hic quos commodi, cupiditate ipsam repudiandae, a est voluptatum! Harum temporibus quod sed necessitatibus perspiciatis facilis eveniet dicta officiis aut, illo neque velit perferendis ab itaque, dolore molestiae cum.</li>
              <li><strong>Molestiae consequatur</strong> ab placeat ipsum, minus tempora recusandae repellendus eius deserunt saepe repellat sit eveniet fugit laudantium voluptate nobis omnis quod facilis neque vitae totam commodi. Tempore, autem tempora. Dolore omnis repudiandae iste quae quis sunt possimus asperiores odit cumque cupiditate. Voluptatum quis iste eum velit nisi id at labore?</li>
              <li><strong>voluptate perspiciatis</strong>In  iusto nisi architecto nostrum voluptates praesentium suscipit non sequi! Veniam provident quisquam officia. Sequi alias est vel delectus atque laudantium, sit quae minima excepturi et, harum ex, dolorum dicta. Ex sint error maxime repellendus, dolores et quibusdam inventore aperiam adipisci suscipit amet id odio nostrum repudiandae vero?</li>
              <li> <strong>Accusamus, minima amet</strong>, dicta maxime laborum eaque facere libero quasi voluptatum nemo explicabo atque, id necessitatibus. In deleniti sed vitae impedit omnis consequuntur nam totam officiis. At iste eius aspernatur debitis corporis soluta. Quod soluta explicabo eum optio itaque eveniet vitae possimus praesentium nam odit, voluptas sequi laudantium quas expedita.</li>
            </ul>
            </p>
          </>
        );
      case "reviews":
        return (
          <>
            <h2 className="SD-About">Reviews</h2>
            <p className="SD-lorem">
            <ul>
              <li><strong>Lorem ipsum dolor:</strong> sit  amet consectetur adipisicing elit. Dolore, exercitationem saepe! Similique asperiores, ex eligendi non, tempora sequi laboriosam sit corrupti quae dolore saepe, adipisci ab recusandae optio. Iure aperiam impedit iste accusantium est, nobis fuga doloribus ea, corrupti suscipit nam illo pariatur ut, eaque repellat. Ea atque ut voluptas?</li>
              <li> <strong>Mollitia quidem explicabo</strong> iusto ipsam similique illum atque, ratione itaque ex magnam quam adipisci facilis. Provident nesciunt doloremque neque facilis, debitis hic quos commodi, cupiditate ipsam repudiandae, a est voluptatum! Harum temporibus quod sed necessitatibus perspiciatis facilis eveniet dicta officiis aut, illo neque velit perferendis ab itaque, dolore molestiae cum.</li>
              <li><strong>voluptate perspiciatis</strong>In  iusto nisi architecto nostrum voluptates praesentium suscipit non sequi! Veniam provident quisquam officia. Sequi alias est vel delectus atque laudantium, sit quae minima excepturi et, harum ex, dolorum dicta. Ex sint error maxime repellendus, dolores et quibusdam inventore aperiam adipisci suscipit amet id odio nostrum repudiandae vero?</li>
              <li> <strong>Accusamus, minima amet</strong>, dicta maxime laborum eaque facere libero quasi voluptatum nemo explicabo atque, id necessitatibus. In deleniti sed vitae impedit omnis consequuntur nam totam officiis. At iste eius aspernatur debitis corporis soluta. Quod soluta explicabo eum optio itaque eveniet vitae possimus praesentium nam odit, voluptas sequi laudantium quas expedita.</li>
            </ul>
            </p>
          </>
        );
      default:
        null;
        return null;
    }
  };

  return (
    <div className="SD-heroContainer">
      <div className="SD-background">
        <img
          className="SD-backgroundL"
          src="/public/images/SingleMentor/headerImge-Laptop.svg"
          alt="background"
        />
        <img
          className="SD-backgroundT"
          src="/public/images/SingleMentor/HeaderImge-Tablet.svg"
          alt="background"
        />
        <img
          className="SD-backgroundM"
          src="/public/images/SingleMentor/HeaderImge-mobile.svg"
          alt="background"
        />
      </div>

      <div className="SD-body">
        <div className="SD-leftPart">
          <div className="mentor-details">
            <div className="mentor-info">

              <div className="mentor-photo">
                <img
                  src="/public/images/SingleMentor/BGprofile.svg"
                  alt="Mentor"
                />
              </div>

              <div className="mentor-text">
                <p className="mentor-name">Kritsin Watson</p>
                <p className="mentor-title">Founder & Mentor</p>
              </div>
              
            </div>
            <div>
              <button className="contact-button">Contact Now</button>
            </div>
          </div>
          <div className="SD-rightPart ">
            <ul>
              <li className="SD-card-list-left">
                <span className="leftPart">Total Course</span>
                <span className="totalCourses">30</span>
              </li>
              <li className="SD-card-list-left">
                <span className="leftPart">Ratings</span>
                <span className="SD-star">
                  <img src="/public/images/SingleMentor/star-Card.svg" alt="" />
                  4.9(<span className="SD-ratingOrang">153</span>)
                </span>
              </li>
              <li className="SD-card-list-left">
                <span className="leftPart">Experiences</span>
                <span className="SD-star">10 Years</span>
              </li>
              <li className="SD-card-list-left">
                <span className="leftPart">Grauduated</span>
                <span className="SD-star">yes</span>
              </li>
              <li className="SD-card-list-left">
                <span className="leftPart">Language</span>
                <span className="SD-star">English, French</span>
              </li>
              <li className="SD-card-list-left">
                <span className="leftPart">Social</span>
                <span>
                  <img
                    className="SD-icons"
                    src="/images/SingleMentor/facebook-logo 1.svg"
                    alt=""
                  />
                  <img
                    className="SD-icons"
                    src="/images/SingleMentor/instagram.svg"
                    alt=""
                  />
                  <img
                    className="SD-icons"
                    src="/images/SingleMentor/Twitter Logo.svg"
                    alt=""
                  />
                  <img
                    className="SD-icons"
                    src="/images/SingleMentor/LinkedIn Icon.svg"
                    alt=""
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="tabsANContent">

          <div className="SD-tabs">
            <button
              className={activeTab === "about" ? "active" : ""}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
            <button
              className={activeTab === "courses" ? "active" : ""}
              onClick={() => setActiveTab("courses")}
            >
              Courses
            </button>
            <button
              className={activeTab === "reviews" ? "active" : ""}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>

          <div className="SD-content">
            {renderContent()}
            </div>

        </div>
      </div>
    </div>
  );
}

import styles from "./style.module.css";
import Title from "../UI/Title";
import Card from "../UI/Card";
import "./custom.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Pagination, Navigation]);

const team = [
  {
    firstname: "Omar",
    lastname: "HOUTI",
    team: "Embedded Systems Engineer",
    image: "team/omar.jpg",
  },
  {
    firstname: "Brahim",
    lastname: "LQATI",
    team: "Software Engineer",
    image: "/team/brahim.jpg",
  },
  {
    firstname: "Mahmoud",
    lastname: "FETTAL",
    team: "Software Engineer",
    image: "team/mahmoud.jpg",
  },
  {
    firstname: "Maroua",
    lastname: "LBOUKILI",
    team: "Marketer",
    image: "team/maroua.jpg",
  },
  {
    firstname: "Ismail",
    lastname: "BAOUHAM",
    team: "Data Scientist",
    image: "team/ismail.jpg",
  },
  {
    firstname: "Choukri",
    lastname: "EL OUASTANI",
    team: "Data Scientist",
    image: "team/choukri.jpg",
  },
  {
    firstname: "Meryem",
    lastname: "EL Kasmi",
    team: "Embedded systems Engineer",
    image: "team/meryeme.jpg",
  },
];

function Team() {
  return (
    <div id="team" className={styles.team}>
      <Title>Our Hard-Working Team</Title>
      <div className={styles.space}>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={false}
          loopFillGroupWithBlank={false}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 2,
            },
            992: {
              width: 992,
              slidesPerView: 3,
            },
            // when window width is >= 768px

          }}
          className="mySwiper"
        >
          {team.map((content,index) => (
            <SwiperSlide key={index}>
              <Card  key={index} content={content} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Team;

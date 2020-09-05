import styles from "./SingleMember.module.scss";
import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import React, { useEffect, useState } from "react";
import CurvedBox from "Components/Layout/CurvedBox/CurvedBox";
import vars from "assets/styles/libs/_vars.scss";
import { projects } from "Utils/Data";
import SingularMember from "Components/Team/SingularMember/SingularMember";
import Carousel from "react-elastic-carousel";
function SingleMemberContent({
  image = process.env.PUBLIC_URL + "/images/post-ph.jpg",
  name,
  role,
  slug,
  social={},
  id,
}) {
  var testimonialSettings = {
    isRTL: true,
    //itemsToShow: 1,
    pagination: false,
    breakPoints: [
      { width: 1, itemsToShow: 1 },
      { width: 960, itemsToShow: 2 },
    ],
  };
  return (
    <Layout pageTitle={name} pageThumb={image} memberMeta={{ role }}>
      <div className={styles.singleMember}>
      
      </div>
    </Layout>
  );
}

export default SingleMemberContent;

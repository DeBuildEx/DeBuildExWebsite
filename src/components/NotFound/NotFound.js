import React from "react";
import Layout from "Components/Layout/Layout";
import CurvedBox from "Components/Layout/CurvedBox/CurvedBox";
function NotFound() {
  return (
    <Layout pageTitle="ارور 404" pageThumb="/images/mainpagethumb.jpg">
      <CurvedBox loc='a' background="#199" className={''}>
        سلام دنیا
      </CurvedBox>
    </Layout>
  );
}

export default NotFound;

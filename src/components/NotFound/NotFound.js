import React from "react";
import Layout from "Components/Layout/Layout"; 
import CurvedBox from "Components/Layout/CurvedBox/CurvedBox";
function NotFound() {
  return (
    <Layout pageTitle="ارور 404" pageThumb="">
        <section>
          <h3>این صفحه وجود ندارد.</h3>
        </section>
    </Layout>
  );
}

export default NotFound;

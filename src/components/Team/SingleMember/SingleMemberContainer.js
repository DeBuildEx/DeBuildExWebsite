import React, { useEffect, useState } from "react";
import { persons } from "Utils/Data";
import NotFound from "Components/NotFound/NotFound";
import Loading from "Components/Loading/Loading";
import SingleMemberContent from "Components/Team/SingleMember/SingleMemberContent";
function SingleMember(props) {
  const { slug } = props.match.params;
  const [member, setMember] = useState({});
  const [wait, setWait] = useState(true);
  useEffect(() => {
    let r = persons.find((i) => i.slug == slug);
    setMember(r);
    setTimeout(() => {
      setWait(false);
    }, 1000);
    //setWait(false);
  }, [slug]);

  if (wait) return <Loading></Loading>;
  if (!member) return <NotFound></NotFound>;
  return <SingleMemberContent {...member}></SingleMemberContent>;
}

export default SingleMember;

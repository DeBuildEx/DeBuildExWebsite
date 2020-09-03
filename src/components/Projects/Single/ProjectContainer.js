import React, { useEffect, useState } from "react";
import { projects } from "Utils/Data";
import NotFound from "Components/NotFound/NotFound";
import Loading from "Components/Loading/Loading";
import ProjectContent from "Components/Projects/Single/ProjectContent";
function Project(props) {
  const { slug } = props.match.params;
  const [project, setProject] = useState({});
  const [wait, setWait] = useState(true);
  useEffect(() => {
    let r = projects.find((i) => i.slug == slug);
    setProject(r);
    setTimeout(() => {
      setWait(false)
    }, 1000);
    //setWait(false);
  }, [slug]);

  if (wait) return <Loading></Loading>;
  if (!project) return <NotFound></NotFound>;
  return <ProjectContent {...project}></ProjectContent>;
}

export default Project;
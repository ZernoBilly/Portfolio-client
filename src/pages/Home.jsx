import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import axios from "axios";

import { StyledContainer } from "../components/styled/StyledContainer/StyledContainer";
import { StyledSection } from "../components/styled/StyledSection/StyledSection";
import Title from "../components/Title/Title";
import TechStack from "../components/TechStack/TechStack";
import Projects from "../components/Projects/Projects";

const Home = () => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data } = await axios.get("http://localhost:5000/cards");
    setProjects(data);
  };

  return (
    <StyledContainer>
      <NavBar />
      <Title />
      <Projects id="projects" projects={projects} />
      <TechStack />
      <StyledSection backgroundColor="white">Neljäs</StyledSection>
    </StyledContainer>
  );
};

export default Home;

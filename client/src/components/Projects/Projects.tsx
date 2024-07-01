import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../apis/projects.api";
import { Col, Row, Spin } from "antd";
import { Project } from "../../types/project.type";
import ProjectCard from "./ProjectCard/ProjectCard";

export default function Projects() {
  const { loading, error, data } = useQuery<{ projects: Project[] }>(
    GET_PROJECTS
  );

  if (loading) return <Spin />;
  if (error) return <p>Something went wrong</p>;

  return (
    <Row gutter={[16, 16]}>
      {data &&
        data.projects.map((project) => (
          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 8, order: 1 }}
            lg={{ span: 6, order: 1 }}
            key={project.id}
          >
            <ProjectCard data={project} />
          </Col>
        ))}
    </Row>
  );
}

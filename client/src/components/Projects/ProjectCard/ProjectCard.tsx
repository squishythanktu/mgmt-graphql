import { Card } from "antd";
import { Project } from "../../../types/project.type";
import PATH from "../../../constants/path.constant";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  data: Project;
}

export default function ProjectCard({ data }: ProjectCardProps) {
  return (
    <Card
      title={data.name}
      extra={
        <Link to={`${PATH.projectDetails.replace(":id", data.id)}`}>View</Link>
      }
    >
      <p>{data.description}</p>
      <p>
        Status: <strong>{data.status}</strong>
      </p>
    </Card>
  );
}

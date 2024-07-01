import { Card } from "antd";
import { Project } from "../../../types/project.type";

interface ProjectCardProps {
  data: Project;
}

export default function ProjectCard({ data }: ProjectCardProps) {
  return (
    <Card title={data.name} extra={<a href="#">View</a>}>
      <p>{data.description}</p>
      <p>
        Status: <strong>{data.status}</strong>
      </p>
    </Card>
  );
}

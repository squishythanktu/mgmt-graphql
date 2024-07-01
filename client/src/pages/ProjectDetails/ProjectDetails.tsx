import { useQuery } from "@apollo/client";
import { Card } from "antd";
import { useParams } from "react-router-dom";
import { GET_PROJECT } from "../../apis/projects.api";
import { Project } from "../../types/project.type";
import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";

export default function ProjectDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery<{ project: Project }>(GET_PROJECT, {
    variables: { id },
  });
  const { name, description, status, client } = data?.project ?? {};

  if (error) return <p>Something went wrong</p>;

  return (
    <div className="flex justify-center">
      <Card
        loading={loading}
        style={{
          width: 400,
          marginTop: 16,
        }}
      >
        <h3 className="font-bold text-3xl">{name}</h3>
        <p>{description}</p>
        <div className="mt-4 mb-8">
          <p className="font-bold text-base">Project status:</p>{" "}
          <span>{status}</span>
        </div>
        <p className="font-bold text-base my-2">Client information</p>
        <Card>
          <div className="flex gap-2 mb-2">
            <UserOutlined />
            <span>{client?.name}</span>
          </div>
          <div className="flex gap-2 mb-2">
            <MailOutlined />
            <span>{client?.email}</span>
          </div>
          <div className="flex gap-2 mb-2">
            <PhoneOutlined />
            <span>{client?.phone}</span>
          </div>
        </Card>
      </Card>
    </div>
  );
}

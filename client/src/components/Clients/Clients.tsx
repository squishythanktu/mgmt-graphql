import { DeleteOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Space, Spin, Table } from "antd";
import { DELETE_CLIENT, GET_CLIENTS } from "../../apis/clients.api";
import { Client } from "../../types/client.type";

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery<{ clients: Client[] }>({
        query: GET_CLIENTS,
      }) ?? { clients: [] };

      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter(
            (client: Client) => client.id !== deleteClient.id
          ),
        },
      });
    },
  });

  const handleDelete = (id: string) => {
    deleteClient({
      variables: {
        id,
      },
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (__: unknown, record: Client) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => handleDelete(record.id)}
            icon={<DeleteOutlined />}
            size="large"
            danger
          />
        </Space>
      ),
    },
  ];

  if (loading) return <Spin className="flex justify-center" size="large" />;
  if (error) return <p>Something went wrong</p>;

  return <Table dataSource={data.clients} columns={columns} rowKey="id" />;
}

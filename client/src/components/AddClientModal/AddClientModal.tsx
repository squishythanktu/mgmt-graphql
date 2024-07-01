import { UserAddOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import { ADD_CLIENT, GET_CLIENTS } from "../../apis/clients.api";
import { Client } from "../../types/client.type";

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

export default function AddClientModal() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addClient] = useMutation(ADD_CLIENT, {
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery<{ clients: Client[] }>({
        query: GET_CLIENTS,
      }) ?? { clients: [] };

      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: [...clients, addClient],
        },
      });
    },
  });

  const showModal = () => {
    setIsModalOpen(true);
    form.resetFields();
  };

  const onSubmit = (values: FormValues) => {
    addClient({
      variables: values,
    });
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <>
      <Button
        type="primary"
        icon={<UserAddOutlined />}
        className="w-fit"
        onClick={showModal}
      >
        Add Client
      </Button>
      <Modal
        title="Add client"
        open={isModalOpen}
        okText="Submit"
        cancelText="Cancel"
        okButtonProps={{ autoFocus: true, htmlType: "submit" }}
        onCancel={() => setIsModalOpen(false)}
        destroyOnClose
        modalRender={(dom) => (
          <Form
            form={form}
            layout="vertical"
            style={{ maxWidth: 600 }}
            onFinish={(values) => onSubmit(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
      </Modal>
    </>
  );
}

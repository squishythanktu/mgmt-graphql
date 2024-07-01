import { Client } from "./client.type";

export type Project = {
  id: string;
  name: string;
  description: string;
  status: string;
  client: Client;
};

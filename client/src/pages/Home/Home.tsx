import AddClientModal from "../../components/AddClientModal/AddClientModal";
import Clients from "../../components/Clients/Clients";
import Projects from "../../components/Projects/Projects";

export default function Home() {
  return (
    <div className="home-container flex flex-col gap-2">
      <Projects />
      <AddClientModal />
      <Clients />
    </div>
  );
}

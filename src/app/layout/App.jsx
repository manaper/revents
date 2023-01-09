import { Fragment, useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";

function App() {
  const [openForm, setFormOpen] = useState(false);
  
  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard openForm={openForm} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;

import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEvent() {
  const data = useRouteLoaderData("event-detail");

  return <EventForm method="PATCH" event={data.event} />;
}

export default EditEvent;

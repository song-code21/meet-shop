type EventCardProps = {
  id: string;
  name: string;
  description: string;
};

const EventCard = ({ id, name, description }: EventCardProps) => {
  return (
    <a
      href={`/events/${id}`}
      className="flex flex-col rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition"
    >
      <div className="mb-3 h-32 rounded-md bg-zinc-100" />
      <h2 className="text-sm font-semibold">{name}</h2>
      <p className="mt-1 line-clamp-2 text-xs text-zinc-600">{description}</p>
    </a>
  );
};
export default EventCard;

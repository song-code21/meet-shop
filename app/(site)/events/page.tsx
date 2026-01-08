import EventCard from "../(components)/eventCard";

const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "오픈기념 이벤트",
    description: "2026-01-01 ~ 2026-01-31",
  },
  {
    id: "2",
    name: "신년이벤트",
    description: "2026-01-01 ~ 2026-01-31",
  },
];

const EventsPage = () => {
  return (
    <div>
      <div className="p-6">
        <h1 className="text-center text-xl font-bold">이벤트/기획전</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {MOCK_PRODUCTS.map((p) => (
          <EventCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

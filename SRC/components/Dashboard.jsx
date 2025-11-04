function Dashboard({ postcards }) {
  if (postcards.length === 0) return <div>No postcards yet.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {postcards.map((card, idx) => (
        <div key={idx} className="border p-2 rounded shadow">
          {card.image && (
            <img
              src={card.image}
              alt="card"
              className="w-full h-32 object-cover"
            />
          )}
          <p className="mt-2">{card.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;

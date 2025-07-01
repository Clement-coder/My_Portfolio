import React from "react";

export default function ProjectFilter({ filters, setFilter, search, setSearch }) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="px-4 py-2 border rounded-lg w-full md:w-1/3"
      />
      <div className="flex gap-2">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded-full ${
              f === filters.current ? "bg-[#766bdf] text-white" : "bg-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}

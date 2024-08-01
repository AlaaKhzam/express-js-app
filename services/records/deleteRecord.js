import recordsData from "../../data/records.json" assert { type: "json" };

const deleteRecord = (id) => {
  const index = recordsData.records.findIndex((record) => record.id === id);

  if (index === -1) {
    return null;
  }

  recordsData.records.splice(index, 1);
  return id;
};

export default deleteRecord;

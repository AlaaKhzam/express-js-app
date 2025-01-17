import recordsData from "../../data/records.json" assert { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

const deleteRecord = (id) => {
  const index = recordsData.records.findIndex((record) => record.id === id);

  if (index === -1) {
    throw new NotFoundError("Record", id);
  }

  recordsData.records.splice(index, 1);
  return id;
};

export default deleteRecord;

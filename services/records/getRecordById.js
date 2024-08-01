import recordsData from "../../data/records.json" assert { type: "json" };

const getRecordById = (id) => {
  const record = recordsData.records.find((record) => record.id === id);
  return record;
};

export default getRecordById;

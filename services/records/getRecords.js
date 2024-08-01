import recordsData from "../../data/records.json" assert { type: "json" };

const getRecords = (artist, available, genre) => {
  let records = recordsData.records;

  if (artist) {
    records = records.filter((record) => record.artist === artist);
  }

  if (available !== undefined) {
    records = records.filter(
      (record) => record.available === JSON.parse(available)
    );
  }

  if (genre) {
    records = records.filter((record) => record.genre === genre);
  }

  return records;
};

export default getRecords;

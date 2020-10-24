var Airtable = require('airtable');
import date from "date-and-time";
var base = new Airtable({apiKey: process.env.AIRTABLE}).base('apprtbHq6BHUIcUpH');

export default async (req, res) => {
  console.log(req.query.id)
  const now = new Date();
  base('Leases').update([
    {
      "id": req.query.id,
      "fields": {
        "Returned": true
      }
    }
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function(record) {
      res.send(record.get('Database Link'));
    });
  });
}  
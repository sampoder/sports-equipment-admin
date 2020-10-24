var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE}).base('apprtbHq6BHUIcUpH');

export default async (req, res) => {
  console.log(req.query.id)
  const now = new Date();
  base('Leases').update([
    {
      "id": req.query.id,
      "fields": {
        "Collected": true,
        "Collected Day": date.format(now, 'YYYY-MM-DD')
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
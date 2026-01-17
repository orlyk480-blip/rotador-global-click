let counter = 0;

export default function handler(req, res) {
  const links = [
    "https://chat.whatsapp.com/HsaBuLsrdPO4V21yjIQv47",
    "https://chat.whatsapp.com/LgnVlowLUYT9cZae0bEI5V",
    "https://chat.whatsapp.com/D4qSliHepxsEVmCFHm7fZK",
    "https://chat.whatsapp.com/KFm5iHFYDgdA5RJ7LXWddZ",
    "https://chat.whatsapp.com/Db2qc5V6ramIhAMh3eLcIC"
  ];

  const link = links[counter % links.length];
  counter++;

  res.writeHead(302, { Location: link });
  res.end();
}

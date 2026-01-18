export default async function handler(req, res) {
  const links = [
    "https://chat.whatsapp.com/KXI7pxgaYn4I0sXDczZRLt",
    "https://chat.whatsapp.com/BhLlRfH72t3ApL6dkJwsxs",
    "https://chat.whatsapp.com/JNUmyUeOxfs7uC1wkxvi8B"
  ];

  // Conexión con Upstash Redis
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  const response = await fetch(`${url}/incr/global_counter`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await response.json();
  const count = data.result;

  // Calcula índice de link según contador global
  const index = (count - 1) % links.length;
  const redirectUrl = links[index];

  // Redirige al grupo correspondiente
  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
// redeploy

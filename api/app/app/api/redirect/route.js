export async function GET() {
  const links = [
    "https://chat.whatsapp.com/KXI7pxgaYn4I0sXDczZRLt",
    "https://chat.whatsapp.com/BhLlRfH72t3ApL6dkJwsxs",
    "https://chat.whatsapp.com/JNUmyUeOxfs7uC1wkxvi8B"
  ];

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  const res = await fetch(`${url}/incr/global_counter`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  const data = await res.json();
  const count = data.result;

  const index = (count - 1) % links.length;
  const redirectUrl = links[index];

  return new Response(null, {
    status: 302,
    headers: { Location: redirectUrl }
  });
}


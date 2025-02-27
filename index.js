export default function handler(req, res) {
  const targetUrl = process.env.REDIRECT_TARGET_URL;
  res.redirect(301, targetUrl);
}

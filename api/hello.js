module.exports = function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({
      error: "Method Not Allowed",
      allowedMethods: ["GET"]
    });
    return;
  }

  res.status(200).json({
    message: "Hello from Vercel Node.js!",
    method: req.method,
    path: req.url,
    timestamp: new Date().toISOString()
  });
};

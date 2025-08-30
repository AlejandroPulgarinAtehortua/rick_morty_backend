import { Request, Response, NextFunction } from "express";

export default function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const start = Date.now();
  console.log(`\n================> New Request <================`);
  console.log(
    `\n================> [${new Date().toISOString()}] \n== method: ${
      req.method
    } \n=== URL: ${req.originalUrl} \n== from IP: ${req.ip}  <===============`
  );
  res.on("finish", () => {
    const ms = Date.now() - start;
    console.log(
      `[${new Date().toISOString()}] Status ===============> ${
        res.statusCode
      } ${res.statusMessage || ""} - ${ms}ms <===============`
    );
  });
  next();
}

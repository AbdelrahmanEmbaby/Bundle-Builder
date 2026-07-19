import type {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";

type Filterable<T> = readonly (keyof T)[];

export function createFilterMiddleware<T>(
  fields: Filterable<T>,
): RequestHandler {
  const allowed = new Set<string>(fields.map(String));

  return (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    const filters = Object.entries(req.query).reduce<
      Record<string, unknown>
    >((acc, [key, value]) => {
      if (allowed.has(key)) {
        acc[key] = value;
      }

      return acc;
    }, {});

    res.locals.filters = filters;

    next();
  };
}
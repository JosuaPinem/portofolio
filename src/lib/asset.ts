/** Prefix a /public path with the deploy base path (empty for <username>.github.io). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

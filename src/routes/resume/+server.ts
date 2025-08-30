import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
    return Response.redirect('https://resume.snit.ski', 302);
};
import type { PageServerLoad } from "./$types";

export async function load(req: PageServerLoad) {
    console.log('load', req);
    return {
        test: 'Hello World!'
    }
}
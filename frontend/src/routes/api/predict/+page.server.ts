
export async function POST(req: Request) {
    console.log('post', req.body);
    return {
        test: 'Hello World!'
    }
}
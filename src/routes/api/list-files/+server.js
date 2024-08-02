import fs from 'fs';
import path from 'path';

export async function GET() {
    const docsDirectory = path.join(process.cwd(), 'static', 'documentation');

    try {
        const files = fs.readdirSync(docsDirectory).filter(file => {
            return fs.statSync(path.join(docsDirectory, file)).isFile();
        }).filter(f => f !== 'index.md');

        return new Response(JSON.stringify(files), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response('Unable to scan directory: ' + error, {
            status: 500
        });
    }
}

/*
import fs from 'fs';
import path from 'path';
*/
export async function GET() {
    /* Cloudflare doesn't support filesystem, so we have to use a static link for now.
    
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

    */

    const files = ["API-Specification.md", "Settings.md"];
    return new Response(JSON.stringify(files), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }

    })
}

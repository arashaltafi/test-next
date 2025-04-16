import handler from '@/app/api/hello/route';
import { createMocks } from 'node-mocks-http';

describe('API Route /api/hello', () => {
    it('returns status 200 and message "Hello, World!"', async () => {
        const { req, res } = createMocks({
            method: 'GET'
        });

        await handler(req, res);

        expect(res._getStatusCode()).toBe(200);
        const data = res._getJSONData();
        expect(data).toEqual({ message: "Hello, World!" });
    });
});
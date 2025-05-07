const { handler } = require('./index.js');

describe('Archive Positions Lambda', () => {
    test('Archives positions and uploads to S3', async () => {
        // Mocking the Lambda event
        const event = {};  // Customize if needed

        try {
            const response = await handler(event);

            // Check the response status code
            expect(response.statusCode).toBe(200);

            // Check the response message
            expect(response.body).toMatch(/Archived \d+ positions to S3/);

            console.log('Test passed: Archive successful.');
        } catch (error) {
            console.error('Test failed:', error);
            throw error;
        }
    });
});

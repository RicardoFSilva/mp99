// https://www.youtube.com/watch?v=gWEYfyLu1ew
// https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=vanilla-javascript

module.exports = async function (context, req) {
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { text : "Hello from the API 3"}
    };
}
namespace FeedManagementService
{
    class MyCustomResult : IResult
    {
        public MyCustomResult(int statusCode, string message)
        {
            StatusCode = statusCode;
            Message = message;
        }
        public int StatusCode { get; } = 200;
        public string Message { get; } = "Not Found";
        public async Task ExecuteAsync(HttpContext httpContext)
        {
            httpContext.Response.StatusCode = StatusCode;
            httpContext.Response.ContentType = "text/html; charset=utf-8";
            await httpContext.Response.Body.WriteAsync(System.Text.Encoding.UTF8.GetBytes(Message));
        }
    }
}

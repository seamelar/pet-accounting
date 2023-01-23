using FeedManagementService;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
/*var myAllowSpecificOrigins = "_myAllowSpecificOrigins";*/

app.MapGet("/", IResult () => { return new MyCustomResult(200, @"<html>
<body>
<div>FFF</div>
</body>
</html>"); }
);
app.MapGet("/test", IResult () => { return new MyCustomResult(200, @"TEST"); }
);

/*builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowSpecificOrigins,
        builder =>
        {
            builder.WithOrigins("http://localhost:4200")
            .AllowAnyMethod()
            .AllowAnyHeader();
        });
});
app.UseCors(myAllowSpecificOrigins);*/

// API routes for monitoring data and weather 
app.MapGet("/api/nastya", () =>
{
    return new
    {
        name = "nastya"
    };
});

app.Run();

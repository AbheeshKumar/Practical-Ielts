using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("ielts-reading")]
public class ReadingController : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<string>>> GetAllReading()
    {
        return Ok("Successfully retrieved reading");
    }
}
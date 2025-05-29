namespace Domain.Entities;

public class Test
{
    public Guid Id { get; set; }
    public TestType TestType { get; set; }
    public string? Title { get; set; } = null;
    public DateTime Date { get; set; } = DateTime.UtcNow;
}

public enum TestType
{
    Reading,
    Listening, 
    Writing, 
    Speaking
};
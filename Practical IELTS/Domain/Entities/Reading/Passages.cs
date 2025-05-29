namespace Domain.Entities.Reading;

public class Passage
{
    public Guid Id { get; set; }
    public Guid TestId { get; set; }
    public string? Content { get; set; } = null;
    public List<QuestionPart> QuestionPart { get; set; } = new();
}

public class QuestionPart
{
    public Guid Id { get; set; }
    public Guid QuestionId { get; set; }
    public string? Description { get; set; } = null;
}
namespace Domain.Entities.Reading;

public class Question
{
    public Guid Id { get; set; }
    public Guid PassageId { get; set; }
    public string Text { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string CorrectAnswer { get; set; } = string.Empty;
    public List<Option> Options { get; set; } = new();
    public Passage Passage { get; set; } = null!;
}
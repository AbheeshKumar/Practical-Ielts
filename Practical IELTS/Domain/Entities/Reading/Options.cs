namespace Domain.Entities.Reading;

public class Option
{
    public Guid Id { get; set; }
    public Guid ReadingId { get; set; }
    public string OptionText { get; set; }
}
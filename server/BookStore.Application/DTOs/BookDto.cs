namespace BookStore.Application.DTOs
{
    public class BookDto
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Price { get; set; }
        public int Rating { get; set; }
        public string ImageUrl { get; set; }
        public List<string>? Category { get; set; }
        public DateTime? PublishedDate { get; set; }
        public string? Description { get; set; }
    }
}

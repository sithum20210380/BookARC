using MediatR;
using BookStore.Application.DTOs;
using BookStore.Domain.Interfaces;

namespace BookStore.Application.Queries
{
    public class GetBookByIdQuery : IRequest<BookDto?>
    {
        public string Id { get; set; }
    }

    public class GetBookByIdQueryHandler : IRequestHandler<GetBookByIdQuery, BookDto?>
    {
        private readonly IBookRepository _bookRepository;

        public GetBookByIdQueryHandler(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        public async Task<BookDto?> Handle(GetBookByIdQuery request, CancellationToken cancellationToken)
        {
            var book = await _bookRepository.GetByIdAsync(request.Id);
            if (book == null) return null;

            return new BookDto
            {
                Id = book.Id,
                Title = book.Title,
                Author = book.Author,
                Price = book.Price,
                Rating = book.Rating,
                ImageUrl = book.ImageUrl,
                Category = book.Category,
                PublishedDate = book.PublishedDate,
                Description = book.Description
            };
        }
    }
}

using MediatR;
using BookStore.Application.DTOs;
using BookStore.Domain.Entities;
using BookStore.Domain.Interfaces;

namespace BookStore.Application.Commands
{
    public class CreateBookCommand : IRequest<string>
    {
        public BookDto Book { get; set; }
    }

    public class CreateBookCommandHandler : IRequestHandler<CreateBookCommand, string>
    {
        private readonly IBookRepository _bookRepository;

        public CreateBookCommandHandler(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        public async Task<string> Handle(CreateBookCommand request, CancellationToken cancellationToken)
        {
            var book = new Book
            {
                Id = request.Book.Id,
                Title = request.Book.Title,
                Author = request.Book.Author,
                Price = request.Book.Price,
                Rating = request.Book.Rating,
                ImageUrl = request.Book.ImageUrl,
                Category = request.Book.Category,
                PublishedDate = request.Book.PublishedDate,
                Description = request.Book.Description
            };

            await _bookRepository.AddAsync(book);
            return book.Id;
        }
    }
}

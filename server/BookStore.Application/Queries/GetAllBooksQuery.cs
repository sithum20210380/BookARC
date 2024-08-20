// Application/Queries/GetAllBooksQuery.cs
using MediatR;
using BookStore.Application.DTOs;
using System.Collections.Generic;

namespace BookStore.Application.Queries
{
    public class GetAllBooksQuery : IRequest<IEnumerable<BookDto>>
    {
    }
}

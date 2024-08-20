using BookStore.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace BookStore.Domain.Interfaces
{
    public interface IBookRepository
    {
        Task<Book?> GetByIdAsync(string id);
        Task<IEnumerable<Book>> GetAllAsync();
        Task AddAsync(Book book);
        Task UpdateAsync(Book book);
        Task DeleteAsync(string id);
    }
}

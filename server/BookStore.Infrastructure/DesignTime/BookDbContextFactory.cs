using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using BookStore.Infrastructure.Persistence;

public class BookDbContextFactory : IDesignTimeDbContextFactory<BookDbContext>
{
    public BookDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<BookDbContext>();
        optionsBuilder.UseSqlite("Data Source=BookStore.db");

        return new BookDbContext(optionsBuilder.Options);
    }
}

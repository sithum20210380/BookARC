using BookStore.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Infrastructure.Persistence
{
    public class BookDbContext : DbContext
    {
        public DbSet<Book> Books { get; set; }

        public BookDbContext(DbContextOptions<BookDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

                modelBuilder.Entity<Book>().HasData(
                  new Book
                  {
                        Id = "1",
                        Title = "All The Light We Cannot See",
                        Author = "Anthony Doerr",
                        Price = "$24.99",
                        Rating = 4,
                        ImageUrl = "/allTheLight.jpg",
                        Category = new List<string> { "Religion", "Spirituality", "Novels" },
                        PublishedDate = new DateTime(2016, 7, 1),
                        Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                  },
                  new Book
                  {
                        Id = "2",
                        Title = "Where The Crawdads Sing",
                        Author = "Delia Owens",
                        Price = "$34.99",
                        Rating = 4,
                        ImageUrl = "/crawdadSing.jpg",
                        Category = new List<string> { "Children", "Fiction", "Novels" },
                        PublishedDate = new DateTime(2016, 7, 1),
                        Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                  },
                  new Book
                  {
                        Id = "3",
                        Title = "Rich People Problems",
                        Author = "Kevin Kwan",
                        Price = "$18.50",
                        Rating = 4,
                        ImageUrl = "/richPeople.jpeg",
                        Category = new List<string> { "Religion", "Novels" },
                        PublishedDate = new DateTime(2016, 7, 1),
                        Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                  },
                  new Book
                  {
                        Id = "4",
                        Title = "Crazy Rich Asians",
                        Author = "Kevin Kwan",
                        Price = "$18.50",
                        Rating = 4,
                        ImageUrl = "/crazyRich.jpg",
                        Category = new List<string> { "Arts", "Children", "Novels" },
                        PublishedDate = new DateTime(2016, 7, 1),
                        Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                  },
                  new Book
                  {
                        Id = "5",
                        Title = "Konspirasi Alam Semesta",
                        Author = "Fiersa Besari",
                        Price = "$18.50",
                        Rating = 4,
                        ImageUrl = "/konspirasi.jpg",
                        Category = new List<string> { "Religion", "Children", "Novels" },
                        PublishedDate = new DateTime(2016, 7, 1),
                        Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                  },
                  new Book
                  {
                        Id = "6",
                        Title = "Becoming",
                        Author = "Michelle Obama",
                        Price = "$18.50",
                        Rating = 4,
                        ImageUrl = "/becoming.jpg",
                        Category = new List<string> { "Religion", "Children", "Novels" },
                        PublishedDate = new DateTime(2016, 7, 1),
                        Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                  },
                  new Book
                  {
                        Id = "7",
                        Title = "Rich People Problems",
                        Author = "Kevin Kwan",
                        Price = "$18.50",
                        Rating = 4,
                        ImageUrl = "/richPeople.jpeg",
                        Category = new List<string> { "Religion", "Children", "Novels" },
                        PublishedDate = new DateTime(2016, 7, 1),
                        Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                  }
            );

            // Configure the Books table
            modelBuilder.Entity<Book>(entity =>
            {
                entity.ToTable("Books");

                // Configure primary key
                entity.HasKey(b => b.Id);

                // Configure properties
                entity.Property(b => b.Id)
                      .IsRequired()
                      .HasMaxLength(50); 

                entity.Property(b => b.Title)
                      .IsRequired()
                      .HasMaxLength(255);

                entity.Property(b => b.Author)
                      .IsRequired()
                      .HasMaxLength(255); 

                entity.Property(b => b.Price)
                      .IsRequired()
                      .HasMaxLength(50); 

                entity.Property(b => b.Rating)
                      .IsRequired(); 

                entity.Property(b => b.ImageUrl)
                      .HasMaxLength(500); 

                entity.Property(b => b.PublishedDate)
                      .IsRequired(false); 

                entity.Property(b => b.Description)
                      .HasMaxLength(1000); 

                entity.Property(b => b.Category)
                      .HasColumnType("TEXT"); 

            });
        }
    }
}

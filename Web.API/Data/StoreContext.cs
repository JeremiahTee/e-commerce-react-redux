using Microsoft.EntityFrameworkCore;
using Web.API.Entities;

namespace Web.API.Data
{
    public class StoreContext: DbContext
    {
        public StoreContext(DbContextOptions options): base(options)
        {
            
        }

        public DbSet<Product> Products {get; set;}
    }
}
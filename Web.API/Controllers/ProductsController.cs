using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Web.API.Data;
using Web.API.Entities;
using Web.API.Extensions;

namespace Web.API.Controllers
{
  public class ProductsController : BaseApiController
  {
    private readonly StoreContext _context;

    public ProductsController(StoreContext context)
    {
      this._context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetProducts(string orderBy)
    {
      var query = _context.Products
      .Sort(orderBy)
      .AsQueryable();

      return await query.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
      var product = await _context.Products.FindAsync(id);

      if (product == null) return NotFound();

      return product;
    }
  }
}

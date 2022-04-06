using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Web.API.Data;
using Web.API.Entities;
using Web.API.Extensions;
using Web.API.RequestHelpers;

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
    public async Task<ActionResult<PagedList<Product>>> GetProducts(ProductParams productParams)
    {
      var query = _context.Products
      .Sort(productParams.OrderBy)
      .Search(productParams.SearchTerm)
      .Filter(productParams.Brands, productParams.Types)
      .AsQueryable();

      var products = await PagedList<Product>.ToPagedList(query, productParams.PageNumber, productParams.PageSize);

      Response.Headers.Add("Pagination", JsonSerializer.Serialize(products.MetaData));

      return products;
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

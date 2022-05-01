#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MotorSystemsApp.Data;
using MotorSystemsApp.Models;

namespace MotorSystemsApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsNeededController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProductsNeededController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ProductsNeeded
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductNeeded>>> GetProductNeeded()
        {
            return await _context.ProductNeeded.ToListAsync();
        }

        // GET: api/ProductsNeeded/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<ProductNeeded>>> GetProductNeeded(int id)
        {
            var productNeeded = await _context.ProductNeeded.Where(p => p.ProductId == id).ToListAsync();

            if (productNeeded == null)
            {
                return NotFound();
            }

            return productNeeded;
        }

        // PUT: api/ProductsNeeded/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductNeeded(int id, ProductNeeded productNeeded)
        {
            if (id != productNeeded.Id)
            {
                return BadRequest();
            }

            _context.Entry(productNeeded).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductNeededExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProductsNeeded
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProductNeeded>> PostProductNeeded(ProductNeeded productNeeded)
        {
            _context.ProductNeeded.Add(productNeeded);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductNeeded", new { id = productNeeded.Id }, productNeeded);
        }

        // DELETE: api/ProductsNeeded/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductNeeded(int id)
        {
            var productNeeded = await _context.ProductNeeded.FindAsync(id);
            if (productNeeded == null)
            {
                return NotFound();
            }

            _context.ProductNeeded.Remove(productNeeded);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductNeededExists(int id)
        {
            return _context.ProductNeeded.Any(e => e.Id == id);
        }
    }
}

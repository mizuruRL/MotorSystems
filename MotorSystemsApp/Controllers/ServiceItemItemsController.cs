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
    public class ServiceItemItemsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ServiceItemItemsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ServiceItemItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ServiceItemItem>>> GetServiceItemItems()
        {
            return await _context.ServiceItemItem.ToListAsync();
        }

        // GET: api/ServiceItemItems/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<ServiceItemItem>> GetServiceItemItem(int id)
        //{
        //    var serviceItemItem = await _context.ServiceItemProduct.FindAsync(id);

        //    if (serviceItemItem == null)
        //    {
        //        return NotFound();
        //    }

        //    return serviceItemItem;
        //}

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<ServiceItemItem>>> GetServiceItemItems(int serviceItemId)
        {
            var items = await _context.ServiceItemItem.Where(sii => sii.ServiceItemId == serviceItemId).ToListAsync();

            return items;
        }

        // PUT: api/ServiceItemItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutServiceItemItem(int id, ServiceItemItem serviceItemItem)
        {
            if (id != serviceItemItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(serviceItemItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceItemItemExists(id))
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

        // POST: api/ServiceItemItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ServiceItemItem>> PostServiceItemItem(ServiceItemItem serviceItemItem)
        {
            _context.ServiceItemItem.Add(serviceItemItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetServiceItemItem", new { id = serviceItemItem.Id }, serviceItemItem);
        }

        // DELETE: api/ServiceItemItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteServiceItemItem(int id)
        {
            var serviceItemItem = await _context.ServiceItemItem.FindAsync(id);
            if (serviceItemItem == null)
            {
                return NotFound();
            }

            _context.ServiceItemItem.Remove(serviceItemItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ServiceItemItemExists(int id)
        {
            return _context.ServiceItemItem.Any(e => e.Id == id);
        }
    }
}

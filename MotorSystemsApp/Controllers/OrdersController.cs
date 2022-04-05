#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MotorSystemsApp.Data;
using MotorSystemsApp.Models;
using Newtonsoft.Json;

namespace MotorSystemsApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OrdersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrder()
        {            
            var orders = await _context.Order.ToListAsync();

            if (orders != null)
            {
                foreach (Order order in orders)
                {
                    order.OrderItems = await _context.OrderItem.Where(oi => oi.OrderId == order.Id).ToListAsync();
                    if (order.OrderItems != null)
                    {
                        foreach (OrderItem item in order.OrderItems)
                        {
                            item.Product = await _context.Product.FindAsync(item.ProductId);
                        }
                    }
                }
            }
            //System.Diagnostics.Debug.WriteLine("AAAAAHAHAHAHHAHA--------");
            //foreach (PropertyDescriptor descriptor in TypeDescriptor.GetProperties(orders[0]))
            //{
            //    string name = descriptor.Name;
            //    object value = descriptor.GetValue(orders[0]);
            //    System.Diagnostics.Debug.WriteLine("{0}={1}", name, value);
            //}

            return orders;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            //var orders = await _context.Order.Where(o => o.ProductId == productId).ToListAsync();
            //var productNeeded = await _context.ProductNeeded.FindAsync(id);
            var order = await _context.Order.FindAsync(id);

            if (order == null)
            {
                return NotFound();
            }

            return order;
        }

        //[HttpGet("{id}")]
        //public async Task<ActionResult<Order>> GetOrderByProduct(int id)
        //{
        //    var orders = await _context.Order.Where(o => o.OrderItems. == productId).ToListAsync();
            
        //    if (orders == null)
        //    {
        //        return NotFound();
        //    }

        //    return orders;
        //}

        // PUT: api/Orders/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder(int id, Order order)
        {
            if (id != order.Id)
            {
                return BadRequest();
            }

            _context.Entry(order).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(id))
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

        // POST: api/Orders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            _context.Order.Add(order);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrder", new { id = order.Id }, order);
        }

        // DELETE: api/Orders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(int id)
        {
            var order = await _context.Order.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }

            _context.Order.Remove(order);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrderExists(int id)
        {
            return _context.Order.Any(e => e.Id == id);
        }
    }
}

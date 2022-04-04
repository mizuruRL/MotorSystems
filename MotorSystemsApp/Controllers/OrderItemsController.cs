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
    public class OrderItemsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private OrdersController _ordersController;

        public OrderItemsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/OrderItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderItem>>> GetOrderItem()
        {
            return await _context.OrderItem.ToListAsync();
        }

        [HttpGet("itemsByProduct/{id}")]
        public async Task<ActionResult<IEnumerable<OrderItem>>> GetOrderItemsByProduct(int id)
        {
            var orderItems = await _context.OrderItem.Where(oi => oi.ProductId == id).ToListAsync();

            if (orderItems == null)
            {
                return NotFound();
            }

            return orderItems;
        }

        [HttpGet("itemsByOrder/{id}")]
        public async Task<ActionResult<IEnumerable<OrderItem>>> GetOrderItemsByOrder(int id)
        {
            var orderItems = await _context.OrderItem.Where(oi => oi.OrderId == id).ToListAsync();
            //orderItems.ForEach(async item => item.Order = await (Order)_ordersController.GetOrder(item.OrderId));

            if (orderItems == null)
            {
                return NotFound();
            }

            return orderItems;
        }

        //[HttpGet("{id}")]
        //public async Task<ActionResult<ICollection<Order>>> GetOrderItem(int id)
        //{
        //    var orderItem = await _context.OrderItem.FindAsync(id);

        //    if (orderItem == null)
        //    {
        //        return NotFound();
        //    }

        //    return orderItem;
        //}

        // PUT: api/OrderItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrderItem(int id, OrderItem orderItem)
        {
            if (id != orderItem.OrderId)
            {
                return BadRequest();
            }

            _context.Entry(orderItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderItemExists(id))
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

        // POST: api/OrderItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<OrderItem>> PostOrderItem(OrderItem orderItem)
        {
            _context.OrderItem.Add(orderItem);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (OrderItemExists(orderItem.OrderId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetOrderItem", new { id = orderItem.OrderId }, orderItem);
        }

        // DELETE: api/OrderItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderItem(int id)
        {
            var orderItem = await _context.OrderItem.FindAsync(id);
            if (orderItem == null)
            {
                return NotFound();
            }

            _context.OrderItem.Remove(orderItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrderItemExists(int id)
        {
            return _context.OrderItem.Any(e => e.OrderId == id);
        }
    }
}

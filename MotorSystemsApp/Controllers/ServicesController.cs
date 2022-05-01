﻿#nullable disable
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
    public class ServicesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ServicesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Services
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Service>>> GetService()
        {
            return await _context.Service.ToListAsync();
        }

        // GET: api/Services/5        
        [HttpGet("{id}")]
        public async Task<ActionResult<Service>> GetService(int id)
        {
            
            var service = await _context.Service.FindAsync(id);

            if (service == null)
            {
                return NotFound();
            }
            
            service.ServiceItems = await _context.ServiceItem.Where(si => si.ServiceId == service.Id).ToListAsync();

            if (service.ServiceItems.Any())
            {
                foreach (ServiceItem item in service.ServiceItems)
                {
                    service.Price += item.Price;
                    item.Items = await _context.ServiceItemItem.Where(sip => sip.ServiceItemId == item.Id).ToListAsync();
                    item.Items.ForEach(item => item.Product = _context.Product.Find(item.ProductId));
                }
            }

            return service;
        }
        
        [HttpGet("servicesByUsername/{username}")]
        public async Task<ActionResult<List<Service>>> GetServicesByUsername(string username)
        {
            
            var services = await _context.Service.Where(s => s.AssignedWorker==username || s.Client == username).ToListAsync();
            
            if (services == null)
            {
                return NotFound();
            }

            return services;
        }
        [HttpGet("servicesByClient/{username}")]
        public async Task<ActionResult<List<Service>>> GetServicesByClient(string username)
        {

            var services = await _context.Service.Where(s => s.Client == username).ToListAsync();

            if (services == null)
            {
                return NotFound();
            }

            return services;
        }
        [HttpGet("servicesByWorker/{username}")]
        public async Task<ActionResult<List<Service>>> GetServicesByWorker(string username)
        {

            var services = await _context.Service.Where(s => s.AssignedWorker == username).ToListAsync();

            if (services == null)
            {
                return NotFound();
            }

            return services;
        }

        // PUT: api/Services/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutService(int id, Service service)
        {
            if (id != service.Id)
            {
                return BadRequest();
            }

            _context.Entry(service).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceExists(id))
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

        // POST: api/Services
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Service>> PostService(Service service)
        {
            _context.Service.Add(service);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetService", new { id = service.Id }, service);
        }

        // DELETE: api/Services/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteService(int id)
        {
            var service = await _context.Service.FindAsync(id);
            if (service == null)
            {
                return NotFound();
            }

            _context.Service.Remove(service);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ServiceExists(int id)
        {
            return _context.Service.Any(e => e.Id == id);
        }
    }
}

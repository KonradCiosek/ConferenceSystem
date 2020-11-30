using ConferenceSystem.Web.Data.Entitites;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConferenceSystem.Web.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) 
        { }

        public DbSet<Room> Rooms { get; set; }
        public DbSet<Booking>Bookings { get; set; }


    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConferenceSystem.Web.Data.Entitites
{
    public class Booking
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Id_Worker { get; set; }
        public Room Room { get; set; }
    }

}

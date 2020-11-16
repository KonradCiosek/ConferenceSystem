using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConferenceSystem.Web.Data.Entitites
{
    public class DbValue
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }

        public string Id_Worker { get; set; }
        public int Id_Room { get; set; }
        public string Time { get; set; }
    }
}

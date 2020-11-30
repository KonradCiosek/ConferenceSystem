using ConferenceSystem.Web.Data;
using ConferenceSystem.Web.Data.Entitites;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ConferenceSystem.Web.Controllers
{
    [Route("api/[Controller]")]
    public class BookingController : Controller
    {
        private readonly Context _context;

        public BookingController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Booking> GetBookings()
        {
            return _context.Bookings;

            //var bookings = new List<Booking>();
            //bookings.Add(new Booking
            //{
            //    Id = 1,
            //    Date = DateTime.Now,
            //    Id_Worker = "Arek",
            //    Room = new Room
            //    {
            //        Id = 1,
            //        Room_nr = 2
            //    }
            //});

        }


        [HttpPost]
        public IEnumerable<Room> PostBookings()
        {
            return _context.Rooms;
        }

    }
}









//public void MetodaX()
//{
//        string dbconnection = ConfigurationManager.ConnectionStrings["ConferenceConnectionString"].ConnectionString;

//        SqlConnection sqldbConnection;
//        sqldbConnection = new SqlConnection(dbconnection);
//        sqldbConnection.Open();
//        SqlCommand command = new SqlCommand("SELECT * FROM Bookings", sqldbConnection);

//        string connection = "SELECT * FROM Bookings";
//        using (SqlDataAdapter adapter = new SqlDataAdapter(connection, sqldbConnection))
//        {
//            DataSet dataAdapter = new DataSet();
//            adapter.Fill(dataAdapter);
//            string Date = dataAdapter.Tables[0].Rows[0][0].ToString();
//            string RoomId = dataAdapter.Tables[0].Rows[0][0].ToString();
//            string Id_Worker = dataAdapter.Tables[0].Rows[0][0].ToString();
//        }

//        command.ExecuteNonQuery();
//        sqldbConnection.Close();
//}
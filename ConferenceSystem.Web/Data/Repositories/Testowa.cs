using ConferenceSystem.Web.Data.Entitites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConferenceSystem.Web.Data.Repositories
{
    public class Testowa : IBooking
    {
        private List<Booking> _bookinglist;

        public Testowa()
        {
            _bookinglist = new List<Booking>()
            {
                new Booking()
                {
                Id = 1,
                Date = DateTime.Now,
                Id_Worker = "Arek",
                Room = new Room
                {
                    Id = 1,
                    Room_nr = 2
                }
            } };
        }
        public Booking Add(Booking book)
        {
            book.Id = _bookinglist.Max(e => e.Id) + 1;
            _bookinglist.Add(book);
            return book;
        }

        public Booking Delete(int id)
        {
            Booking book = _bookinglist.FirstOrDefault(e => e.Id == id);
            if (book != null)
            {
                _bookinglist.Remove(book);
            }
            return book;
        }

        public Booking GetRoom(int id)
        {
            throw new NotImplementedException();
        }

        public Booking Update(Booking roomChanges)
        {
            throw new NotImplementedException();
        }
    }
}

using System;

namespace ConferenceSystem.Web.Data.Entitites
{
    public interface IBooking
    {
        Booking GetRoom(int id);
        Booking Add(Booking room);
        Booking Update(Booking roomChanges);
        Booking Delete(int id);
    }
}
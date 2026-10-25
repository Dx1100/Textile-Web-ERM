import React, { useState } from 'react';
import { X, Video, MapPin, Calendar, Clock, CheckCircle2, Phone } from 'lucide-react';
import { ConsultationBooking } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [booking, setBooking] = useState<ConsultationBooking>({
    name: '',
    phone: '',
    email: '',
    type: 'video_call',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '03:00 PM - 04:00 PM',
    interestedCategory: 'Bridal Lehengas & Pure Katan Brocades',
    notes: '',
  });

  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!booking.name || !booking.phone) {
      alert('Please provide your name and contact phone number.');
      return;
    }
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-stone-200 overflow-hidden my-6 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#1F1916] text-[#FAF8F5] p-6 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#9B1D2C] flex items-center justify-center text-[#D8B26E] shadow-inner">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold tracking-wide">Book a Textile Draping Consultation</h2>
              <p className="text-xs text-stone-300">Live HD Video Call or Chandni Chowk Showroom Appointment</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {confirmed ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1F1916]">
                Consultation Confirmed!
              </h3>
              <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{booking.name}</strong>. Your session for <strong>{booking.date} ({booking.timeSlot})</strong> is reserved with a Senior Textile Specialist from Bhasin Textiles.
              </p>
              <div className="bg-stone-50 p-4 rounded-xl text-left text-xs text-stone-700 space-y-1.5 border border-stone-200">
                <p><span className="font-semibold">Format:</span> {booking.type === 'video_call' ? 'One-on-One WhatsApp / Meet Video Session' : 'Showroom Private Visit'}</p>
                <p><span className="font-semibold">Categories Prepared:</span> {booking.interestedCategory}</p>
                <p><span className="font-semibold">Contact:</span> {booking.phone}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setConfirmed(false);
                  onClose();
                }}
                className="w-full py-3 bg-[#1F1916] hover:bg-[#9B1D2C] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Close & Return to Store
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Type Switcher */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                  Consultation Format
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setBooking({ ...booking, type: 'video_call' })}
                    className={`p-3 rounded-xl border text-xs flex items-center gap-2.5 transition-all text-left cursor-pointer ${
                      booking.type === 'video_call'
                        ? 'border-[#9B1D2C] bg-[#9B1D2C]/5 font-semibold text-stone-900 ring-1 ring-[#9B1D2C]'
                        : 'border-stone-200 text-stone-600 hover:border-stone-400 bg-white'
                    }`}
                  >
                    <Video className="w-4 h-4 text-[#9B1D2C] shrink-0" />
                    <div>
                      <p className="font-bold">Live Video Draping</p>
                      <p className="text-[10px] text-stone-500">For Outstation & Global Clients</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setBooking({ ...booking, type: 'chandni_chowk' })}
                    className={`p-3 rounded-xl border text-xs flex items-center gap-2.5 transition-all text-left cursor-pointer ${
                      booking.type === 'chandni_chowk'
                        ? 'border-[#9B1D2C] bg-[#9B1D2C]/5 font-semibold text-stone-900 ring-1 ring-[#9B1D2C]'
                        : 'border-stone-200 text-stone-600 hover:border-stone-400 bg-white'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-[#9B1D2C] shrink-0" />
                    <div>
                      <p className="font-bold">Showroom Visit</p>
                      <p className="text-[10px] text-stone-500">Chandni Chowk Heritage Floor</p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={booking.name}
                    onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                    placeholder="e.g. Jasleen Kaur"
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={booking.phone}
                    onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                    placeholder="+91 98110 54321"
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-3.5 h-3.5 absolute left-2.5 top-3 text-stone-400" />
                    <input
                      type="date"
                      required
                      value={booking.date}
                      onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                      className="w-full text-xs pl-8 pr-2.5 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Time Slot (IST)
                  </label>
                  <div className="relative">
                    <Clock className="w-3.5 h-3.5 absolute left-2.5 top-3 text-stone-400" />
                    <select
                      value={booking.timeSlot}
                      onChange={(e) => setBooking({ ...booking, timeSlot: e.target.value })}
                      className="w-full text-xs pl-8 pr-2.5 py-2.5 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-[#9B1D2C]"
                    >
                      <option value="11:30 AM - 12:30 PM">11:30 AM – 12:30 PM</option>
                      <option value="02:00 PM - 03:00 PM">02:00 PM – 03:00 PM</option>
                      <option value="03:00 PM - 04:00 PM">03:00 PM – 04:00 PM</option>
                      <option value="05:30 PM - 06:30 PM">05:30 PM – 06:30 PM</option>
                      <option value="07:00 PM - 08:00 PM (US/UK friendly)">07:00 PM – 08:00 PM (US/UK friendly)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Primary Interest
                </label>
                <select
                  value={booking.interestedCategory}
                  onChange={(e) => setBooking({ ...booking, interestedCategory: e.target.value })}
                  className="w-full text-xs p-2.5 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-[#9B1D2C]"
                >
                  <option value="Bridal Lehengas & Pure Katan Brocades">Bridal Lehengas & Pure Katan Brocades</option>
                  <option value="Virasat Heritage Silk Sarees">Virasat Heritage Silk Sarees</option>
                  <option value="Bespoke Groom Sherwani Fabrics">Bespoke Groom Sherwani Fabrics</option>
                  <option value="Chanderi & Organza Festive Yardages">Chanderi & Organza Festive Yardages</option>
                  <option value="Designer Capsule & Bulk Sourcing">Designer Capsule & Bulk Sourcing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Specific Requests (Wedding Date, Color Palette, etc.)
                </label>
                <textarea
                  rows={2}
                  value={booking.notes}
                  onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                  placeholder="Tell us what you are looking for so we can have fabric bolts ready..."
                  className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

"use client";

import React, { useState } from "react";
import { Mail, MessageCircle, Send, MapPin, CheckCircle2, Clock } from "lucide-react";

interface ContactoProps {
  title?: string;
  subtitle?: string;
  whatsappNumber?: string; // Ej: "+50760000000"
  whatsappMessage?: string;
  instagramHandle?: string; // Ej: "@sailingtheworld"
  instagramUrl?: string;
  emailAddress?: string;
}

export default function Contacto({
  title = "Ponte en Contacto",
  subtitle = "Estamos aquí para ayudarte a planificar tu próxima travesía en San Blas. Escríbenos por tu canal preferido o envíanos un mensaje directo.",
  whatsappNumber = "+50760000000",
  whatsappMessage = "Hola Sailing the World, me gustaría recibir más información sobre los charters en San Blas.",
  instagramHandle = "@sailingtheworld.panama",
  instagramUrl = "https://instagram.com",
  emailAddress = "contacto@sailingtheworld.com",
}: ContactoProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", guests: "2", message: "" });
    }, 1200);
  };

  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 font-sans">
      
      {/* Encabezado */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
          Atención Personalizada
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0F1E2E] font-semibold tracking-tight mt-3">
          {title}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* COLUMNA IZQUIERDA: Canales Rápidos de Contacto */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-6">
            <h3 className="text-lg font-serif font-bold text-[#0F1E2E]">
              Canales Directos
            </h3>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50/60 hover:bg-emerald-100/70 border border-emerald-200/80 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block">
                  WhatsApp Directo
                </span>
                <span className="text-sm font-semibold text-slate-800 block truncate">
                  Chat e Informes Rápidos
                </span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-pink-50/50 hover:bg-pink-100/60 border border-pink-200/60 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-rose-900 uppercase tracking-wider block">
                  Instagram
                </span>
                <span className="text-sm font-semibold text-slate-800 block truncate">
                  {instagramHandle}
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${emailAddress}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0F1E2E] text-amber-100 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Correo Electrónico
                </span>
                <span className="text-sm font-semibold text-slate-800 block truncate">
                  {emailAddress}
                </span>
              </div>
            </a>
          </div>

          {/* Card Info Extra */}
          <div className="bg-[#0F1E2E] text-white rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-amber-200 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Base Operativa</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Islas San Blas (Guna Yala), Panamá. Respuestas en menos de 24 horas.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Horario de atención: 8:00 AM - 7:00 PM (EST)</span>
            </div>
          </div>

        </div>

        {/* COLUMNA DERECHA: Formulario de Mensaje Directo */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <h3 className="text-xl font-serif font-bold text-[#0F1E2E] mb-2">
            Escríbenos tu Consulta
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Déjanos tus datos y la cantidad aproximada de viajeros para prepararte una propuesta a medida.
          </p>

          {isSubmitted ? (
            <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-3 animate-in fade-in duration-200">
              <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
              <h4 className="text-base font-bold text-emerald-950">¡Mensaje enviado con éxito!</h4>
              <p className="text-xs sm:text-sm text-emerald-800">
                Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-xs font-bold text-emerald-900 underline hover:text-emerald-950"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Nombre */}
                <div className="space-y-1">
                  <label className="block text-xs font-medium text-slate-700">
                    Nombre completo <span className="text-emerald-700">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. María García"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="block text-xs font-medium text-slate-700">
                    Correo electrónico <span className="text-emerald-700">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="maria@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Teléfono */}
                <div className="space-y-1">
                  <label className="block text-xs font-medium text-slate-700">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+54 9 11 0000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition"
                  />
                </div>

                {/* Pasajeros */}
                <div className="space-y-1">
                  <label className="block text-xs font-medium text-slate-700">
                    Huéspedes estimados
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition"
                  >
                    <option value="1-2">1 - 2 personas</option>
                    <option value="3-4">3 - 4 personas</option>
                    <option value="5-6">5 - 6 personas</option>
                    <option value="7+">7 o más personas</option>
                  </select>
                </div>

              </div>

              {/* Mensaje */}
              <div className="space-y-1">
                <label className="block text-xs font-medium text-slate-700">
                  Mensaje o detalles del viaje <span className="text-emerald-700">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Cuéntanos fechas estimadas, preferencias de barco o dudas..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition resize-none"
                />
              </div>

              {/* Botón Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          )}

        </div>

      </div>

    </section>
  );
}
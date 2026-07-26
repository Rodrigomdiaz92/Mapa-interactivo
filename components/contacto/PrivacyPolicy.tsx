"use client";

import React from "react";
import { ShieldCheck, Mail, Globe, Lock, ExternalLink } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <article className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 font-sans text-slate-800">
      
      {/* Encabezado */}
      <div className="border-b border-slate-200 pb-8 mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200/80 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Legales & Transparencia</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F1E2E] tracking-tight">
          Política de Privacidad de Sailing the World
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
          Esta Política de Privacidad describe cómo se recopila, utiliza y comparte su información personal cuando visita, crea una cuenta, realiza una reserva o utiliza los servicios de{" "}
          <a
            href="https://sailingtheworld.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-800 font-semibold underline hover:text-emerald-950 inline-flex items-center gap-0.5"
          >
            sailingtheworld.net <ExternalLink className="w-3 h-3" />
          </a>{" "}
          (el &quot;Sitio&quot;), operado por Sailing the World, con sede en Panamá.
        </p>
      </div>

      {/* Contenido Modular */}
      <div className="space-y-10 text-xs sm:text-sm leading-relaxed text-slate-700">
        
        {/* SECCIÓN 1 */}
        <section className="bg-slate-50/60 p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F1E2E] flex items-center gap-2">
            Información Personal que Recopilamos
          </h2>
          <p>
            Cuando visita el Sitio, recopilamos automáticamente cierta información sobre su dispositivo, incluyendo:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2 pt-1 font-medium text-slate-800">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span> Navegador web
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span> Dirección IP
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span> Zona horaria
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span> Cookies instaladas en su dispositivo
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span> Páginas o servicios visitados
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span> Sitios web de referencia o términos de búsqueda
            </li>
          </ul>
          <p className="pt-2 text-slate-600">
            A esto lo llamamos <strong className="text-slate-900">&laquo;Información del Dispositivo&raquo;</strong>.
          </p>

          <div className="pt-4 border-t border-slate-200/80 space-y-2">
            <p className="font-semibold text-slate-900">Recopilamos información del dispositivo mediante:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Cookies:</strong> archivos de datos que se almacenan en su dispositivo con identificadores anónimos. Más información en{" "}
                <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-emerald-800 underline">
                  allaboutcookies.org
                </a>.
              </li>
              <li>
                <strong>Archivos de registro:</strong> registran las acciones en el sitio web (dirección IP, tipo de navegador, proveedor de servicios de internet, marcas de tiempo).
              </li>
              <li>
                <strong>Balizas web, etiquetas y píxeles:</strong> se utilizan para analizar el comportamiento de navegación.
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-200/80 space-y-2">
            <h3 className="font-bold text-slate-900">Información de reservas y cuenta</h3>
            <p>
              Cuando usted crea una cuenta, solicita información, realiza una reserva o compra un chárter o una experiencia de viaje, recopilamos:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Datos de facturación</li>
              <li>Datos del viaje o de la reserva</li>
              <li>Información de confirmación de pago (datos de la transferencia bancaria, no credenciales bancarias completas).</li>
            </ul>
            <p className="text-slate-600 pt-1">
              Nos referimos a esto como <strong className="text-slate-900">&laquo;Información del pedido&raquo;</strong>. Cuando utilizamos el término <strong className="text-slate-900">&laquo;Información personal&raquo;</strong>, nos referimos tanto a la Información del dispositivo como a la Información del pedido.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F1E2E]">
            Cómo Usamos su Información Personal
          </h2>
          <p>Utilizamos su información para:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gestionar alquileres de veleros, viajes organizados y alojamiento a bordo.</li>
            <li>Procesar y confirmar reservas.</li>
            <li>Enviar facturas y confirmaciones de reserva.</li>
            <li>Comunicar información importante relacionada con el viaje.</li>
            <li>Verificar la identidad y prevenir el fraude.</li>
            <li>Brindar atención al cliente.</li>
            <li>Mejorar nuestro sitio web y servicios.</li>
            <li>Analizar el uso y el rendimiento del marketing.</li>
          </ul>
          <blockquote className="p-4 bg-emerald-50/80 border-l-4 border-emerald-800 rounded-r-xl text-emerald-950 font-medium my-3">
            No enviamos correos electrónicos promocionales. Los correos electrónicos son exclusivamente para fines operativos (reservas, confirmaciones, coordinación de viajes).
          </blockquote>
        </section>

        {/* SECCIÓN 3 Y 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-serif font-bold text-base text-[#0F1E2E] flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-700" />
              Pagos
            </h3>
            <p className="text-slate-600">
              Los pagos se procesan mediante transferencia bancaria. No almacenamos datos bancarios completos ni números de tarjeta de crédito en nuestros servidores.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-serif font-bold text-base text-[#0F1E2E] flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-700" />
              Cuentas de Usuario
            </h3>
            <p className="text-slate-600">
              Los datos de la cuenta se utilizan para gestionar reservas, historial y comunicaciones. Los usuarios son responsables de mantener la confidencialidad de sus credenciales de acceso.
            </p>
          </div>
        </div>

        {/* SECCIÓN COMPARTIR */}
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F1E2E]">
            Compartir tu Información Personal
          </h2>
          <p>
            Compartimos información únicamente cuando es necesario, incluyendo con:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Proveedores de servicios de reservas y alojamiento</li>
            <li>Proveedores de servicios técnicos</li>
            <li>Google Analytics</li>
            <li>Meta Pixel (Pixel de Facebook)</li>
            <li>Google Ads</li>
          </ul>
          <p className="text-slate-600">
            Estas herramientas nos ayudan a comprender el uso del sitio web y la efectividad de la publicidad.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-xs">
            <a
              href="https://www.google.com/intl/en/policies/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200/80 rounded-lg text-slate-800 font-medium inline-flex items-center gap-1"
            >
              Política de Privacidad de Google <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200/80 rounded-lg text-slate-800 font-medium inline-flex items-center gap-1"
            >
              Exclusión de Analytics <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <p className="text-slate-500 text-xs">
            También podemos compartir información cuando lo exija la ley o para proteger nuestros derechos legales.
          </p>
        </section>

        {/* PUBLICIDAD CONDUCTUAL & NO RASTREAR */}
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F1E2E]">
            Publicidad Conductual &amp; No Rastrear
          </h2>
          <p>
            Utilizamos cookies, Meta Pixel y herramientas de Google Ads para ofrecer publicidad relevante basada en el comportamiento de navegación.
          </p>
          <p className="text-xs text-slate-600">
            Más información en{" "}
            <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" target="_blank" rel="noopener noreferrer" className="text-emerald-800 underline">
              Network Advertising Initiative
            </a>{" "}
            o exímase en{" "}
            <a href="http://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 underline">
              AboutAds Opt-Out
            </a>.
          </p>
          <p className="text-slate-600 pt-1">
            <strong>No Rastrear:</strong> No modificamos nuestras prácticas de recopilación de datos en respuesta a las señales de &quot;No rastrear&quot; del navegador.
          </p>
        </section>

        {/* DERECHOS & MENORES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-base text-[#0F1E2E]">Sus Derechos</h3>
            <p>Según su ubicación, usted puede tener derecho a:</p>
            <ul className="list-disc pl-5 space-y-0.5">
              <li>Acceder a sus datos personales</li>
              <li>Solicitar correcciones</li>
              <li>Solicitar la eliminación</li>
              <li>Limitar el procesamiento</li>
            </ul>
            <p className="text-slate-500 text-xs pt-1">
              Sus datos pueden ser procesados y almacenados fuera de su país, incluyendo Panamá.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif font-bold text-base text-[#0F1E2E]">Conservación y Menores</h3>
            <p>
              Conservamos la información de reservas y cuentas con fines operativos, legales y de registro, a menos que solicite su eliminación.
            </p>
            <p className="text-slate-600">
              <strong>Menores de Edad:</strong> Nuestros servicios solo pueden ser utilizados por menores cuando estén acompañados o autorizados por un tutor legal. No recopilamos datos directamente de menores sin la participación de un tutor.
            </p>
          </div>
        </div>

        {/* PIE / CONTACTO */}
        <div className="p-6 bg-[#0F1E2E] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-amber-200 uppercase tracking-widest block">¿Preguntas sobre privacidad?</span>
            <h4 className="text-lg font-serif font-bold">Contacto de Privacidad</h4>
            <p className="text-xs text-slate-300 mt-0.5">Sailing the World — Panamá</p>
          </div>
          <a
            href="mailto:contacto@sailingtheworld.net"
            className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors shrink-0 uppercase tracking-wider"
          >
            <Mail className="w-4 h-4" />
            <span>contacto@sailingtheworld.net</span>
          </a>
        </div>

      </div>
    </article>
  );
}
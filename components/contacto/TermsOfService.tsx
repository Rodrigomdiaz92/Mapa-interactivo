"use client";

import React from "react";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <article className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 font-sans text-slate-800">
      
      {/* Encabezado */}
      <div className="border-b border-slate-200 pb-8 mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-800 border border-slate-200 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <FileText className="w-4 h-4 text-emerald-700" />
          <span>Términos y Condiciones</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F1E2E] tracking-tight">
          Términos de Servicio
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
          Lea atentamente estos Términos de Servicio antes de acceder o utilizar nuestro sitio web. Al acceder o utilizar cualquier parte del sitio, usted acepta regirse por estos Términos.
        </p>
      </div>

      {/* Contenido Secuencial */}
      <div className="space-y-10 text-xs sm:text-sm leading-relaxed text-slate-700">
        
        {/* INFORMACIÓN GENERAL */}
        <section className="bg-slate-50/60 p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-3">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F1E2E]">
            Información General
          </h2>
          <p>
            Este sitio web es operado por <strong>Sailing the World</strong>. En todo el sitio, los términos &quot;nosotros&quot;, &quot;nos&quot; y &quot;nuestro&quot; se refieren a Sailing the World. Sailing the World ofrece este sitio web, incluyendo toda la información, herramientas y servicios disponibles en él, a usted, el usuario, sujeto a su aceptación de todos los términos, condiciones, políticas y avisos aquí establecidos.
          </p>
          <p>
            Al visitar nuestro sitio web y/o comprar algo de nosotros, usted utiliza nuestro &quot;Servicio&quot; y acepta regirse por los siguientes términos y condiciones (&quot;Términos de Servicio&quot;, &quot;Términos&quot;), incluyendo aquellos términos y condiciones adicionales a los que se hace referencia en este documento o disponibles mediante enlace. Estos Términos se aplican a todos los usuarios del sitio, incluyendo navegadores, proveedores, clientes, comerciantes y/o colaboradores de contenido.
          </p>
          <p>
            Cualquier nueva función o herramienta que se agregue a la plataforma también estará sujeta a los Términos de Servicio. Nos reservamos el derecho de actualizar, modificar o reemplazar cualquier parte de estos Términos publicando las actualizaciones en nuestro sitio web. Es su responsabilidad revisar esta página periódicamente para estar al tanto de los cambios.
          </p>
        </section>

        {/* SECCIÓN 1 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-800 text-white font-bold flex items-center justify-center text-xs shrink-0">
              1
            </span>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F1E2E]">
              Términos de la Tienda en Línea
            </h2>
          </div>
          <p className="pl-9">
            Al aceptar estos Términos de Servicio, usted declara que tiene al menos la mayoría de edad en su estado o provincia de residencia, o que tiene la mayoría de edad y nos ha dado su consentimiento para que sus dependientes menores de edad utilicen este sitio.
          </p>
          <p className="pl-9">
            No podrá utilizar nuestros productos para ningún fin ilegal o no autorizado, ni podrá, al utilizar el Servicio, infringir ninguna ley de su jurisdicción (incluidas las leyes de derechos de autor).
          </p>
          <p className="pl-9">
            No deberá transmitir gusanos, virus ni ningún código de naturaleza destructiva. El incumplimiento o la violación de cualquiera de los Términos resultará en la terminación inmediata de sus Servicios.
          </p>
        </section>

        {/* SECCIÓN 2 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-800 text-white font-bold flex items-center justify-center text-xs shrink-0">
              2
            </span>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F1E2E]">
              Condiciones Generales
            </h2>
          </div>
          <div className="pl-9 space-y-2">
            <p>
              Nos reservamos el derecho de negar el servicio a cualquier persona por cualquier motivo y en cualquier momento.
            </p>
            <p>
              Usted comprende que su contenido (excluyendo la información de tarjeta de crédito) puede transferirse sin cifrar e implicar transmisiones a través de diversas redes y modificaciones para adaptarse a requisitos técnicos. La información bancaria y de tarjetas siempre se cifra durante la transferencia a través de las redes.
            </p>
            <p>
              Usted se compromete a no reproducir, duplicar, copiar, vender, revender ni explotar ninguna parte del Servicio, su uso o el acceso al mismo sin nuestra autorización expresa por escrito.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-800 text-white font-bold flex items-center justify-center text-xs shrink-0">
              3
            </span>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F1E2E]">
              Exactitud, Integridad y Actualidad de la Información
            </h2>
          </div>
          <div className="pl-9 space-y-2">
            <p>
              No nos hacemos responsables si la información disponible en este sitio no es precisa, completa o actual. El material de este sitio se proporciona únicamente con fines informativos generales y no debe utilizarse como base exclusiva para la toma de decisiones sin consultar fuentes primarias más precisas. El uso del material de este sitio es bajo su propio riesgo.
            </p>
            <p>
              Este sitio puede contener información histórica. La información histórica se proporciona únicamente como referencia. Nos reservamos el derecho de modificar el contenido de este sitio en cualquier momento, pero no tenemos la obligación de actualizar la información.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-800 text-white font-bold flex items-center justify-center text-xs shrink-0">
              4
            </span>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F1E2E]">
              Modificaciones del Servicio y Precios
            </h2>
          </div>
          <div className="pl-9 space-y-2">
            <p>
              Los precios de nuestros productos o servicios están sujetos a cambios sin previo aviso.
            </p>
            <p>
              Nos reservamos el derecho de modificar o interrumpir el Servicio (o cualquier parte de su contenido) en cualquier momento sin previo aviso. No seremos responsables ante usted ni ante terceros por ninguna modificación, cambio de precio, suspensión o interrupción del Servicio.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-800 text-white font-bold flex items-center justify-center text-xs shrink-0">
              5
            </span>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F1E2E]">
              Productos o Servicios (si corresponde)
            </h2>
          </div>
          <div className="pl-9 space-y-2">
            <p>
              Algunos productos o servicios pueden estar disponibles exclusivamente en línea a través del sitio web. Estos productos o servicios pueden tener cantidades limitadas y están sujetos a devolución o cambio únicamente de acuerdo con nuestra Política de Devoluciones.
            </p>
            <blockquote className="p-4 bg-slate-100 rounded-xl text-slate-700 italic border-l-4 border-slate-400 my-2">
              Hemos hecho todo lo posible para evitar cualquier inconveniente.
            </blockquote>
          </div>
        </section>

      </div>
    </article>
  );
}
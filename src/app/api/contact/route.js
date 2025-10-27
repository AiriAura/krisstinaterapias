import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { nombre, email, mensaje } = await request.json();

    // 1. Validación básica en el servidor
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El formato del email no es válido" },
        { status: 400 }
      );
    }

    // 2. Lógica de envío con Web3Forms
    if (!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) {
        console.error("La clave de acceso de Web3Forms no está configurada en .env.local");
        return NextResponse.json(
          { error: "La configuración del servidor es incorrecta. No se puede enviar el formulario." },
          { status: 500 }
        );
    }

    const formData = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      name: nombre,
      email: email,
      message: mensaje,
      subject: `Nuevo mensaje de ${nombre} desde tu sitio web Holístico`,
      from_name: "Notificación de tu Web",
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!result.success) {
        console.error("Error desde Web3Forms:", result);
        return NextResponse.json(
            { error: "Hubo un error al enviar el mensaje a través del servicio de correo." },
            { status: 500 }
        );
    }

    // 3. Respuesta exitosa
    return NextResponse.json(
      { 
        success: true, 
        message: "¡Gracias por tu mensaje! Te contactaré pronto." 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error en la API de contacto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor al procesar el mensaje." },
      { status: 500 }
    );
  }
}

// Método GET para verificar que la API funciona
export async function GET() {
  return NextResponse.json({ 
    message: "API de contacto funcionando correctamente.",
    timestamp: new Date().toISOString()
  });
}

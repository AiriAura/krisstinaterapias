// app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, telefono, email, motivo, horario, mensaje } = body;
    
    // Aquí puedes:
    // 1. Enviar email (usando Resend, SendGrid, etc.)
    // 2. Guardar en base de datos
    // 3. Enviar a webhook de Zapier/Make
    
    console.log('Formulario recibido:', body);
    
    // Por ahora solo retorna éxito
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al procesar el formulario' },
      { status: 500 }
    );
  }
}